const MouseScroll = () => {
    return (
      <div className="mouse_scroll flex flex-col items-center">
        <div className="mouse w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="wheel w-2 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
        <div className="flex flex-col items-center mt-2 space-y-1">
          <span className="m_scroll_arrows w-2 h-2 border-b-2 border-r-2 border-white transform rotate-45"></span>
          <span className="m_scroll_arrows w-2 h-2 border-b-2 border-r-2 border-white transform rotate-45"></span>
          <span className="m_scroll_arrows w-2 h-2 border-b-2 border-r-2 border-white transform rotate-45"></span>
        </div>
      </div>
    );
  };
  
  export default MouseScroll;