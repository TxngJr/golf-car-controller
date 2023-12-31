import React from "react"
import Svg, { Path } from "react-native-svg"

type Props = {
  activeTabButtonText?: string
}

function SvgComponent({ activeTabButtonText }: Props) {
  return (
    <Svg
      height={43}
      viewBox="0 -960 960 960"
      width={43}
      fill={activeTabButtonText === 'active' ? '#90D6FA' : '#000000'}
    >
      <Path d="M612-306L450-468v-202h60v178l144 144-42 42zm-495-1q-15-34-24-70t-12-73h60q2 29 10 57.5t19 55.5l-53 30zM81-510q3-38 12-74t25-70l52 30q-12 27-19.5 56t-9.5 58H81zm173 363q-32-22-59.5-49T146-255l53-30q17 25 38.5 46.5T284-200l-30 53zm-55-529l-52-30q21-32 48-59t59-48l30 53q-25 17-46.5 38T199-676zM450-81q-38-3-74-12t-70-25l30-52q27 12 56 19.5t58 9.5v60zM336-790l-30-52q34-16 70-25t74-12v60q-29 2-58 9.5T336-790zM510-81v-60q29-2 58-9.5t56-19.5l30 52q-34 16-70 25t-74 12zm114-709q-27-12-56-19.5t-58-9.5v-60q38 3 74 11.5t70 25.5l-30 52zm82 643l-30-53q25-17 46-38t38-46l53 30q-21 32-48 59t-59 48zm54-529q-17-25-38-46t-46-38l30-53q32 21 58.5 48t47.5 59l-52 30zm59 166q-2-30-10-58.5T789-624l53-30q17 34 25.5 70t11.5 74h-60zm23 204l-52-30q12-27 19.5-56t9.5-58h60q-3 38-12 74t-25 70z" />
    </Svg>
  )
}

export default SvgComponent
