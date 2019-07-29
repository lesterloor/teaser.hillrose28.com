import { TEST_ACTION } from "."

export const testAction = action => {
    console.log("action take Leading", action)
    return {
        type: TEST_ACTION,
        action
    }
}