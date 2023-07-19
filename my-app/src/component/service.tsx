import React, { FunctionComponent } from 'react'
import imageCompression from 'browser-image-compression'
const Service: FunctionComponent = () => {
  const handleImageUpload: any = async (event: any) => {
    const imageFile = event.target.files[0]
    console.log('originalFile instanceof Blob', imageFile instanceof Blob) // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`)
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }
    try {
      const compressedFile = await imageCompression(imageFile, options)
      console.log(
        'compressedFile instanceof Blob',
        compressedFile instanceof Blob,
      ) // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`) // smaller than maxSizeMB
      let link = document.createElement('a')
      link.download = compressedFile.name
      let blob = compressedFile
      link.href = URL.createObjectURL(blob)
      link.click()
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section id="compress" className="services">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={100}
            style={{ width: '100%' }}
          >
            <div className="icon-box icon-box-cyan" style={{ width: '100%' }}>
              <div className="icon">
                <i className="bx bx-file" />
              </div>
              <h4 className="title">
                <a href="">Upload your Image!</a>
              </h4>
              <input
                className="title"
                // style={{ opacity: 0 }}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImageUpload(e)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Service
