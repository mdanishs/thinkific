const ExtraData = ({ title, description, icon }) => {
  return (
    <div
      className="d-flex flex-column align-items-center p-2 extra-data"
    >
      <div>{title}</div>
      {icon && <img src={icon} />}
      <div>{description}</div>
    </div>
  )
}

export default ExtraData;