import { MotiView, MotiText } from 'moti'

export default function  FadeIn({children})  {
    return (

    
  <MotiView
  style={{ height: '100vh',  }}
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'timing' }}
  >{children}</MotiView>
)
    }