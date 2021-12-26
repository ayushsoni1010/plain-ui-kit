import './button.component.style.css';

export default function Button(ButtonProps) {
  let ButtonStyleConfiguration = {
    size: (ButtonProps.size ? ButtonProps.size : 'pu-button__medium'),
    variant: (ButtonProps.variant ? ButtonProps.variant : 'pu-button__solid')
  };
  // special button rendering logics
  if (ButtonProps.brandButton === 'login-google') {}
  return (
    <button className={`
      pu-button
      ${ButtonStyleConfiguration.size}
      ${ButtonStyleConfiguration.variant}
    `}
    {...ButtonProps}
    >
      {ButtonProps.value}
    </button>
  )
}