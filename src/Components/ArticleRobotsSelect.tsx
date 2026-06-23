import { RobotsType } from '../Types/apiTypes';

interface Props {
  value: RobotsType;
  onChange: (value: RobotsType) => void;
  disabled?: boolean;
}

const ArticleRobotsSelect = ({ value, onChange, disabled }: Props) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <span className="text-sm">وضعیت ایندکس:</span>
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value as RobotsType)}
        className="border px-2 py-1 rounded text-sm"
      >
        <option value="index,follow">Index</option>
        <option value="noindex,follow">No Index</option>
      </select>
    </div>
  );
};

export default ArticleRobotsSelect;
