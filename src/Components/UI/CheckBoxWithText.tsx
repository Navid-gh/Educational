import { Checkbox } from "./CheckBox";

type Props = {
  text: string;
  isChecked: boolean;
  checkHandler: () => void;
};

export function CheckboxWithText({ text, isChecked, checkHandler }: Props) {
  return (
    <div className="items-top flex space-x-2 gap-3">
      <Checkbox
        id="terms1"
        checked={isChecked}
        // onChange={() => checkHandler()}
        onClick={checkHandler}
        className="bg-pink"
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {text}
        </label>
        {/* <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p> */}
      </div>
    </div>
  );
}
