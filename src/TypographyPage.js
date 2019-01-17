import React from 'react'
import './TypographyPage.css'

const FONTS = {
  FiraSans: 'Fira Sans, sans-serif'
}

function TypographyPage({ ...props }) {

  return (
    <div style={{ fontFamily: FONTS.FiraSans }}>
      <div className="container">
        <h1 className="text-center">Typography</h1>
        <p>
          If God is the mystery of the universe, these mysteries, we're tackling these mysteries one by one. If you're going to stay religious at the end of the conversation, God has to mean more to you than just where science has yet to tread. <br/>
          As a scientist, I want to go to Mars and back to asteroids and the Moon because I'm a scientist. But I can tell you, I'm not so naive a scientist to think that the nation might not have geopolitical reasons for going into space. <br/>
          I see all this talk about jobs going overseas as a symptom of the absence of innovation. And the absence of innovation is a symptom of there being no major national priority to advance a frontier. <br/>
          I don't know anybody who said, 'I love that teacher, he or she gave a really good homework set,' or 'Boy, that was the best class I ever took because those exams were awesome.' That's not what people want to talk about. It's not what influences people in one profession or another.  <br/>
          If we find life out there, and it's not us, we will deem it not intelligent. But what may be equally as likely is that we find life that's vastly more intelligent than we are. If that's the case, we are putty in their hands. <br/>
          Where there's water on Earth, you find life as we know it. So if you find water somewhere else, it becomes a remarkable draw to look closer to see if life of any kind is there, even if it's bacterial, which would be extraordinary for the field of biology.
        </p>
      </div>
    </div>
  )
}

export default TypographyPage