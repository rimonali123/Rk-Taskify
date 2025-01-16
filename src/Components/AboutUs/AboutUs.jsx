import React from 'react';
import imgR from '../../../../../Screenshot_2024-12-16-18-15-12-340_com.bigwinepot.nwdn.international-edit.jpg'
const AboutUs = () => {
    return (
        <div className='mt-10'>
        <div className='mb-20 text-4xl font-bold text-indigo-600'>About us</div>
            <div className='flex gap-10'>
                <div className='w-full '>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
                <div className='w-full '>
                    <img src={imgR} alt='' className='rounded-full h-[600px] w-full'></img>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;