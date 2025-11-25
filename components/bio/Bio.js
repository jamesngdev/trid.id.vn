import styles from './bio.module.scss'
import TextType from '../TextType'

export function Bio({ className }) {
  return (
    <div className={styles.bio}>
      <div className={styles.profile}>
        <img
          src="/static/images/avatar.png"
          alt="Profile Image"
          className="rounded-full "
          style={{
            width: '268px',
          }}
        />
        <div className={styles.hi}>
          <h2 className={styles.black}>Hi.</h2>
          <h2 className={styles.white}>Hi.</h2>
        </div>
      </div>
      <div className={styles.description}>
        <p>I'm Tri Nguyen Van</p>

        <TextType
          text={['Backend Developer', 'Golang', 'Node.js', 'React.js', 'Next.js']}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </div>
  )
}
