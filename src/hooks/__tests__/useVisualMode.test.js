import { renderHook, act } from "@testing-library/react-hooks";
import useVisualMode from "hooks/useVisualMode";
const FIRST = "FIRST";
const SECOND = "SECOND";
test("useVisualMode should initialize with default value", () => {
  const thing = renderHook(() => useVisualMode(FIRST));
    console.log(thing)
  //expect(result.current.mode).toBe(FIRST);
});