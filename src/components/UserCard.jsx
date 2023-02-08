const UserCard = ({ name, validate,age =0}) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>{validate ? ':smiley:' : 'smiling_face_with_tear'}</p>
      <p>{age <=18 ? 'puede entrar' : 'no puede entrar'}</p>
    </article>
  )
}

const UserCard1 = (props) => {
  return (
    <article>
      <h2>{props.name}</h2>
    </article>
  )
}

export { UserCard, UserCard1 }
