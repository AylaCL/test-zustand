import { useCounterStore } from "../stores/store";
import CustomButton from "./CustomButton";

export default function ({ count }: { count: number }) {
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)
    const incrementAsync = useCounterStore((state) => state.incrementAsync)
    const decrementAsync = useCounterStore((state) => state.decrementAsync)

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="text-3xl">{count}</div>
            <div className="flex gap-3 text-2xl">
                <CustomButton buttonName="Increment" onClick={incrementAsync} />
                <CustomButton buttonName="Decrement" onClick={decrementAsync} />
            </div>
        </div>
    );
}