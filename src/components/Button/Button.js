
export default function Button(ButtonProps) {
    let ButtonSizing = (() => {
        return (ButtonProps.size) ? ButtonProps.size : "default";
    })
    let ButtonVariant = (() => {
        return (ButtonProps.variant) ? ButtonProps.variant : "primary";
    })
    let ButtonProperties = {
        ButtonSizing,
        ButtonVariant,
        ...ButtonProps
    }
    return (
        <button className={ButtonProperties}>
            {ButtonProperties.value}
        </button>
    )
}