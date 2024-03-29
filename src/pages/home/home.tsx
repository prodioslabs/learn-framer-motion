import { motion } from 'framer-motion'
import DemoCard from './components/demo-card'
import { FeatureCardDemo } from '../features-card/demo'
import IntroTitle from './components/intro-title'

const CHILDREN_VARIANTS = {
  initial: { y: 80, opacity: 0.01 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
}

export default function Home() {
  return (
    <div className="p-4">
      <motion.div
        className="mx-auto grid max-w-screen-lg grid-cols-3 gap-8"
        initial="initial"
        animate="enter"
        variants={{
          enter: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.div className="col-span-full" variants={CHILDREN_VARIANTS}>
          <IntroTitle title="Learn Framer Motion" />
        </motion.div>
        <motion.div variants={CHILDREN_VARIANTS}>
          <DemoCard
            title="Features Card"
            chapterNumber={1}
            url="/features-card"
            demo={<FeatureCardDemo />}
            description={
              <span>
                Usage of <code className="font-mono">useScroll</code> hook
              </span>
            }
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
