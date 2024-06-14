module.exports = {
  params: {
    raw: { type: "net", value: "RAW" },
    neg: { type: "net", value: "GND" },
  },
  body: (p) => `
    (module lib:bat (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
	  (pad 1 thru_hole circle (at 0 -1.5 0) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${
      p.raw.str
    }) 
	  (pad 2 thru_hole circle (at 0 0 0) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${
      p.neg.str
    })
     )
    `,
};
