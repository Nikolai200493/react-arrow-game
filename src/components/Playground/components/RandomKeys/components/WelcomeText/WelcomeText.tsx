import stylesCommon from "../../RandomKeys.module.css"
import styles from "./WelcomeText.module.css"
import { TypographyText } from "../../../../../UI"
import loader from "./img/loader.svg"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img src={loader} alt="Loader" className={styles.loader} />
        </span>
      </div>
    )
  }

  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default WelcomeText
