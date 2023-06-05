import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
 // const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  //Bug2,Bug7
 const inputId= useRef(`RampInputCheckbox-${id}`);

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId.current}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
         "RampInputCheckbox--label-disabled": disabled,
        
        })}
        //Bug2
        htmlFor={inputId.current} 
      />
      <input
        id={inputId.current}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
