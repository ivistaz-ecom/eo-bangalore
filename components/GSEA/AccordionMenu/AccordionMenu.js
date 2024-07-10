const AccordionMenu = ({ title, content, id, isExpanded, toggleExpand }) => {
  return (
    <div>
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full bg-white p-5 font-medium text-[#454545] gap-3 rounded-xl ${
            isExpanded ? 'rounded-b-none' : ''
          }`}
          onClick={() => toggleExpand(id)}
          aria-expanded={isExpanded}
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <span>{title}</span>
          <div className="border-2 border-[#454545] rounded-full flex justify-center items-center p-2">
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 ${isExpanded ? '' : 'rotate-180'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </div>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${id}`}
        className={`bg-white rounded-b-xl ${isExpanded ? 'block' : 'hidden'}`}
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <div className="p-5">
          <p className="mb-2 text-[#454545]">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionMenu
