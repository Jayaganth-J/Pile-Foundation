function RippleButton({ as = 'button', className = '', children, onClick, ...props }) {
  const Component = as

  const handleClick = (event) => {
    const button = event.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = `${diameter}px`
    circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`
    circle.className = 'ripple'

    const ripple = button.getElementsByClassName('ripple')[0]
    if (ripple) ripple.remove()

    button.appendChild(circle)
    if (onClick) onClick(event)
  }

  return (
    <Component className={`btn ripple-btn ${className}`} onClick={handleClick} {...props}>
      {children}
    </Component>
  )
}

export default RippleButton
