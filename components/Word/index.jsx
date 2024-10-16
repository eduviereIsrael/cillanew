
import { motion, useTransform } from "framer-motion"

const Word = ({children, progress, range}) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
      <span className={'word'}>
        <span className={'shadow'}>{children}</span>
        <motion.span style={{opacity: opacity}}>{children}</motion.span>
      </span>
    )
}

export default Word