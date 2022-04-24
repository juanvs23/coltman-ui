import React from 'react'
import Button from '../components/buttonComponent'
import Layout from '../components/layout'

function Buttons() {
  return (
    <Layout title='Buttons' >
      <div className="row mb-3">
        <div className="col-3">
         <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button />'}</code>
        <Button  />
        </div>
        <div className="col-3">
         <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'&:hover, &:focus'}</code>
        <Button  hovered={ 'hovered-regular' }/>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button variant=”outline” />'}</code>
        <Button variant='outline' color='primary' />
        </div>
        <div className="col-3">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'&:hover, &:focus'}</code>
        <Button variant='outline' color='primary' hovered={ 'hovered' } />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button variant=”text” />'}</code>
        <Button variant='text'  />
        </div>
        <div className="col-3">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'&:hover, &:focus'}</code>
        <Button variant='text' hovered={ 'hovered' } />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button disableShadow={true} />'}</code>
        <Button variant="primary" disableShadow={true}  />
        </div>
       
      </div>
      <div className="row mb-2">
        <div className="col-3">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button isDisabled />'}</code>
        <Button variant="primary" isDisabled  />
        </div>
        <div className="col-4">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button variant="text" isDisabled />'}</code>
        <Button variant="text" hovered={ 'hovered' } isDisabled  />
        </div>
       
      </div>
      <div className="row mb-2">
        <div className="col-4">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button variant="primary" startIcon="send" />'}</code>
        <Button variant="primary" startIcon='send' />
        </div>
        <div className="col-4">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{' <Button variant="primary" endIcon="send"  />'}</code>
        <Button variant="primary" endIcon="send"  />
        </div>
       
      </div>
      <div className="row mb-4">
        <div className="col-3">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button isDisabled />'}</code>
        <Button variant="primary" size="sm"  />
        </div>
        <div className="col-4">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button variant="text" isDisabled />'}</code>
        <Button variant="primary" size="md"  />
        </div>
        <div className="col-4">
        <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button variant="text" isDisabled />'}</code>
        <Button variant="primary" size="lg" />
        </div>
       
      </div>
      <div className="row mb-4">
        <div className="col-4">
        <div className="mb-2">
          <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button color="default" />'}</code>
          <Button  color='default' />
        </div>
          <div className="mb-2">
          <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'&:hover, &:focus'}</code>
          <Button color='default'  hovered={ 'hovered-regular' }/>
          </div>
        </div>
        <div className="col-4">
        <div className="mb-2">
          <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button color="primary" />'}</code>
          <Button  color='primary' />
        </div>
          <div className="mb-2">
          <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'&:hover, &:focus'}</code>
          <Button color='primary'  hovered={ 'hovered' }/>
          </div>
        </div>
        <div className="col-4">
        <div className="mb-2">
          <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'<Button color="secondary" />'}</code>
          <Button  color='secondary' text='secondary' />
        </div>
          <div className="mb-2">
          <code className='mb-1' style={{display:'block',padding:'0 5px'}}>{'&:hover, &:focus'}</code>
          <Button color='secondary' text='secondary' hovered={ 'hovered' }/>
          </div>
        </div>
       
      </div>
    </Layout>
  )
}

export default Buttons