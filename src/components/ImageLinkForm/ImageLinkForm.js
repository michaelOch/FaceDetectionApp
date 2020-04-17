import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmitImage }) => {
    return (
        <div className="text-center">
            <p style={{fontSize: '18px', fontWeight: '800'}} className="">
                {'This Smart Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className="shadow p-4 rounded">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter image url..."
                        onChange={onInputChange}
                    />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-info" onClick={onSubmitImage}>Detect</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;