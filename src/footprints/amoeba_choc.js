// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//
// note: hotswap and reverse can be used simultaneously

module.exports = {
  params: {
    designator: "S",
    hotswap: false,
    reverse: false,
    keycaps: false,
    from: undefined,
    to: undefined,
  },
  body: (p) => {
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${"" /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${
        p.ref_hide
      } (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${"" /* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))

      ${"" /* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      `;
    const keycap = `
      ${"" /* keycap marks */}to
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `;
    const pos = (def_pos, x, y) => {
      const points = p.at.split(" ");
      const pos = {
        x: parseFloat(points[1]) + x * def_pos,
        y: parseFloat(points[2]) + y,
      };
      return `${pos.x} ${pos.y}`;
    };
    function segments_row(def_pos, side) {
      return `
        (segment
          (start ${pos(def_pos, 0.0, -3.6)})
          (end ${pos(def_pos, 0.925, -3.6)})
          (layer ${side}.Cu) (width 0.25) (net ${p.from.index}))
        (segment
          (start ${pos(def_pos, 0.925, -3.6)})
          (end ${pos(def_pos, 3.275, -5.95)})
          (layer ${side}.Cu) (width 0.25) (net ${p.from.index}))
      `;
    }
    function segments_col(def_pos, side) {
      return `
        (segment
          (start ${pos(def_pos, 0.0, -2.6)})
          (end ${pos(def_pos, 3.6, -6.2)})
          (layer ${side}.Cu) (width 0.25) (net ${p.to.index}))
        (segment
          (start ${pos(def_pos, 3.6, -6.2)})
          (end ${pos(def_pos, 5.6, -6.2)})
          (layer ${side}.Cu) (width 0.25) (net ${p.to.index}))
        (segment
          (start ${pos(def_pos, 5.6, -6.2)})
          (end ${pos(def_pos, 8.275, -3.75)})
          (layer ${side}.Cu) (width 0.25) (net ${p.to.index}))
      `;
    }
    function segments_diode() {
      return `
        (segment
          (start ${pos(1, -0.925, -3.6)})
          (end ${pos(1, -3.75, -0.75)})
          (layer B.Cu) (width 0.25) (net ${p.to.index}))
        (segment
          (start ${pos(1, -3.75, -0.75)})
          (end ${pos(1, -3.75, 2.2)})
          (layer B.Cu) (width 0.25) (net ${p.to.index}))
      `;
    }
    function pins(def_neg, def_pos, def_side) {
      if (p.hotswap) {
        return `
          ${"" /* holes */}
          (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))

          ${"" /* net pads */}
          (pad 1 smd rect (at ${def_neg}3.275 -5.95 ${
            p.rot
          }) (size 2.0 2.0) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${
            p.from.str
          })
          (pad 2 smd rect (at ${def_pos}8.275 -3.75 ${
            p.rot
          }) (size 2.0 2.0) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${
            p.to.str
          })

          ${"" /* vias */}
          (pad "" thru_hole circle (at 0 -3.6) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.from.str})
          (pad "" thru_hole circle (at 0 -2.6) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.to.str})
        `;
      } else {
        return `
            ${"" /* pins */}
            (pad 1 thru_hole circle (at ${def_pos}5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${
              p.from.str
            })
            (pad 2 thru_hole circle (at ${def_pos}0 -5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${
              p.to.str
            })
          `;
      }
    }
    if (p.reverse) {
      return `
        ${standard}
        ${p.keycaps ? keycap : ""}
        ${pins("-", "", "B")}
        ${pins("", "-", "F")})
        ${segments_row(-1, "B")}
        ${segments_row(1, "F")}
        ${segments_col(1, "B")}
        ${segments_col(-1, "F")}
        ${segments_diode()}
        `;
    } else {
      return `
        ${standard}
        ${p.keycaps ? keycap : ""}
        ${pins("-", "", "B")})
        `;
    }
  },
};
