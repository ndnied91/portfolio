
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import './unimodal.scss'
const UniModal = (props) =>{

  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);


    const renderLang= ()=>{
      return props.lang.map( (lan)=>{
            return <div className="individual_lang">{lan} </div>
      })
    }

    return(
      <div>
          <Modal
          open={open}
          onClose={onCloseModal}
           center
           classNames={{  overlay: 'customOverlay', modal: 'customModal' }}

           >
           <div className='container_modal'>
              <h3> <a href={props.link} className='title_modal'  target="_blank" rel="noreferrer"> {props.title} </a>  </h3>

              <div className="stl">  {props.desc}  </div>

              <div className="modal_lang">
                  <h4> Tools used to build this project:  </h4>
                  <div className="icon-list">
                     {renderLang()}
                  </div>

              </div>

                <div className="github_modal">
                   <a href={props.github}  target="_blank" rel="noreferrer"> <i className="fab fa-github fa-2x"></i> </a>
                   <a href={props.link}  target="_blank" rel="noreferrer">  <i className="fas fa-external-link-alt fa-2x"></i>  </a>
                </div>

            </div>
          </Modal>
        </div>
        )
}


export default UniModal
