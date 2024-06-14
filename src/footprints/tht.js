module.exports = {
  params: {
    net: undefined,
  },
  body: (p) => `
      (module THT (layer F.Cu) (tedit 591DBFB0)
      ${p.at /* parametric position */}
      ${"" /* footprint reference */}
      (fp_text reference REF** (at 0 1.4) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value VIA-0.6mm (at 0 -1.4) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

        (pad 1 thru_hole rect (size 1.4 1.4) (drill 0.7) (layers *.Cu *.Mask) ${
          p.net.str
        })
      )
    `,
};
