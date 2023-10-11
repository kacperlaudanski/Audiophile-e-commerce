const SocialIcon: React.FC<{path: string}> = (props) => {
  return (
    <a href="javascript:void(0)">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="social-icon">
      <path
        d={props.path}
        fill="currentColor"
        fill-rule="nonzero"
      />
    </svg>
  </a>
  )
}

export default SocialIcon; 