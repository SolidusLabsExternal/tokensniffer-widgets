import React from "react"
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

export default function Gauge({ value=50, min=0, max=100, backgroundColor, fillColor }) {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    ()

  return (
      <svg style={{overflow: "visible"}}
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
        </defs>
        <path
          d={backgroundArc}
          fill={backgroundColor}
        />
        <path
          d={filledArc}
          fill={fillColor}
        />
      </svg>
  )
}