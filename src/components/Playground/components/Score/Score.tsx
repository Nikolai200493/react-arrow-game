import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import { Chip, Stack } from "@mui/material"

const Score: React.FC = (props) => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>

      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnsuccess}
          variant="outlined"
          label={
            <>
              Errors:{" "}
              <span className={styles.counter}>{state.totalUnsuccessfull}</span>
            </>
          }
        />
        <Chip
          className={styles.chipSuccess}
          variant="outlined"
          label={
            <>
              Successful:{" "}
              <span className={styles.counter}>{state.totalSuccessfull}</span>
            </>
          }
        />
      </Stack>
    </>
  )
}

export default Score
