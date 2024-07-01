import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { clsx } from 'clsx'

const Tooltip = ({ url, tag }) => {
  const [showTooltip, setShowTooltip] = React.useState(false)
  const id = React.useId()

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [showTooltip])

  const handleClick = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(url)
    setShowTooltip(true)
  }

  return (
    <>
      <ReactTooltip
        id={id}
        place="top"
        content="Copied!"
        isOpen={showTooltip}
      />
      <button
        type="button"
        data-tooltip-id={id}
        data-tooltip-variant="light"
        data-url={url}
        className={clsx('heading-anchor', tag)}
        onClick={handleClick}
      >
        #
      </button>
    </>
  )
}

export default Tooltip