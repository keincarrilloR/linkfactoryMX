interface Props {
  title: string
}

const Title = ({ title }: Props) => {
  return <h2 className="text-base sm:text-lg font-semibold">{title}</h2>
}

export default Title
