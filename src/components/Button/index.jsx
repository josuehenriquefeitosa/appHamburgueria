import { Button as ContainerButton } from "./styles"

// eslint-disable-next-line react/prop-types
function Button({children, ...props}) {
	return (
		<ContainerButton {...props}>{children}</ContainerButton>
	)
}

export default Button