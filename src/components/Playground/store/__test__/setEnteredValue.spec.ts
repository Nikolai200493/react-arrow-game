import { ARR_ARROW_CODES } from "../../constants"
import playgroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
  setEnteredValue,
} from "../slices"

describe("reducer setEnteredValue", () => {
  it("check enteredValue", () => {
    const enteredValue = ARR_ARROW_CODES[0]

    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(enteredValue),
    )

    expect(setStepsState.steps[0].enteredValue).toBe(null)
    expect(setEnteredValueState.steps[0].enteredValue).toBe(enteredValue)
  })

  it("check totalSuccessfull and total unsuccessfull", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(setStepsState.steps[0].currentValue),
    )

    expect(setStepsState.totalSuccessfull).toBe(0)
    expect(setStepsState.totalUnsuccessfull).toBe(0)
    expect(setEnteredValueState.totalSuccessfull).toBe(1)
    expect(setEnteredValueState.totalUnsuccessfull).toBe(0)
  })
})
