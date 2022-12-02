import React, { useState } from 'react'
import CalendarForm from '../CalendarForm'

const GraphicOption = () => {
  const [activeTab, setActiveTab] = useState("tab1")

  return (
    <div className='example'>
      <> Pull and Insert Event Graphic (via seperate js file) </>
      <br /> <br />
      <CalendarForm name={"Example"} nE={'ne0800'} nL={'nl1700'}/>
    </div>
  );
};

export default GraphicOption;
