import React from 'react'
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import './SaleOffProduct.css'
const SaleOffProduct = () =>{
    return (
        <div class = "mt-10 mb-10 ">
            <div class = "d-flex justify-content-center position-relative  width-900">
                <div class = "d-flex justify-content-start ">
                <p class="fs-2">New Arrivals.
                    <span class = "text-muted-color text-muted">REY backpacks & bags</span>
                </p>
                </div>
                <div class ="mt-4 d-flex justify-content-end width-90 flex-shrink-1">
                    <div class = "position-relative d-flex align-items-center">
                        {/* <button type="button" class = "btn">
                            <svg>
                                <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="currentColor" stroke-width="1.5"
                                stroke-miterlimit ="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.5 12H3.67004" stroke="currentColor" stroke-width="1.5" stroke-miterlimit ="10"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <button type="button" class = "btn d-flex ">
                            <svg>
                                <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke='currentColor' stroke-width="1.5"
                                stroke-miterlimit ="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit ="10"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button> */}

                    </div>
                </div>
            </div>
            
                <div>
                    <ul className="product_items d-flex">
                        <li className="product_item" >
                           <div class = "position-relative d-flex flex-column product_item_header">
                             <a href="https://chisnghiax.com/ciseco/product-detail">
                                <div className="d-flex">
                                    <img className="img-fluid" alt="Ao" src="https://chisnghiax.com/ciseco/static/media/5.9ddc0dff360795c6f5b5.png"></img>
                                </div>
                             </a>
                             <div className="position-absolute d-flex justify-content-center product_item_size ">
                                <div className="btn-size justify-content-center align-items-center d-flex">XS</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">S</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">M</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">L</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">XL</div>
                             </div>
                           </div>

                           <div className="Product_item_colors">
                                <div className="d-flex">
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB8AAADAQEBAQAAAAAAAAAAAAACBAUDAQYAEAACAgEDAgMIAgMAAAAAAAABAgADBBEhQQUxEhNxIjJRUlNhgYIUwSMzcgEBAQEBAQAAAAAAAAAAAAAAAgABAwURAAIBBAEEAwEAAAAAAAAAAAABAhEhMVESIjJBkWFxgaH/2gAMAwEAAhEDEQA/APBF2M9k8o4FZpEaBNJGh7ASIEuBIjMtrIgC+nYGRGwr5JmmB6gdpGgl9JhGbN95hGTPIibd1JfGaqEN1nKr2Hq0Dn4SqxcfLsjL+FlZG+TksnwSo+ECXBvuf4i5JYXs9AT950CZM4EiF3t05mETL+por+TWDZb9NNz+TxA5pOiu9CUXl2QS4eReNcqzwr9Ks6D9jzN4t9z/ABFySx7ZQrqppQLWiosSogs42Qid2EqkE9wEiJWX1Gmj3m3PZRux9BBKajkUYuWBdMfqGbvaTjU/KP8AYw/qZSc89K15FWEcXe/BXx8fGxU8FFYUcnk+saioqiA226tnz3qnczTCZ/NuynavFTxkHRn7IvqZz5NukVUfGiq2O1dLqI1yD5zn5vdHoIlDdzOWrEhDn55/wIaqvrONz/yIKzn22W2KkI5u9IqYnTsTE9vQvae9j7tHGEY/ewym5fWhqy2IJLyOoAP5dYL2Hsi7mBzS+XoSi3fCCp6Zdf7ea+i8Uodv2MuDl3ejeSWPZdrrStFRFVVHZQNBGlRUQAi6iaQm1wHMyphMyeoVUglmEMppZYkm3ZC1WPn52jHWin5j75H2HEHXP4X9H0x+WXMTCxsRCKk0J95jux9TOkYqOAOTeRotNMF7MgAHfYcmREazqDuxFKhviza6H00nNz0NR2KrbmZreHGT2ebG2UTOUpdq/S4pd3oq4fScehvNsPm3fO3HoIowSdXdmObaorLRVLToEyewIDMImZGaE2OpPCiFySNSbJjG286udB8o7QXkOyHKqkA0iSC2XRoo0UAAdgIwglgOZEKXZSKDuNuZERrs1nJFZ/Y/1ObloajsXRCW13JPMyhtSjXQ2gjoFscWnQcTQjFtyoNTNIlZGcBrr+AO5hckjUqkwvZcfa7cCc6tjSSG6ccniJIxsp1YwGm0aQWxxawNJphr4RpIw8lbmFiQh1PLcD0nJz8I6KGzOql3bU/kzEhNpFejF+M6JAbKddQXsJoTYLNIKRHNxzpNI//Z"></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANQMBEQACEQEDEQH/xAB/AAACAwEBAAAAAAAAAAAAAAAEBQACAwEGEAABAwMABwYHAQAAAAAAAAABAAIDBAURBhIhIkFRoRMVMWKRkhQzQlJhsdEjAQADAQEBAAAAAAAAAAAAAAAAAgMBBAURAAICAgICAgMBAAAAAAAAAAABAgMREiExE0EEMiJRcWH/2gAMAwEAAhEDEQA/APe7F754nBMhAcEytMJlAEQB1aYdwUAZBAHcFAYZYNKDcMsGFZk3VlxGjJupfEY8Ss5DCK9tT+BK3WRmYlC6JvEJeR/xRk6qhbxTayZm0UDvuMDR4plVJiO2IJLeY2DOQAqKhk3ehBV6YW6EEPrIweQOseiqvjk3c30IJdOIZHatNBUTu8rVVUE3ZLPLSMO+9Jpt6GzlrfO7BT+KP7Qm/wDrOv01Ex1aalqZz5WqapSKOcmU+P0sqvkWnsweMp/uE2sF7RmZMs2y6WVJ/wB7jFCDwjGSjaCMwwmPQaKQh1XWVU5/JwEO2K9GqDH9JobaYcatFGfy/e/am/kD+FvvJ6OCzxRgBrA0cgMBSl8hjqgObb4GjgpO6RRUxAYqFjAAxgaOQGFR2iKsJFI3ikdg3iNBFEzacJd2xtIojp6ZnEIxNm5ggeS6wsBxhMqmxXbFCKfSqlDixkwe/wCyMGR3ozKdUIm7n6BO9LzLvRWyo1eb3NjPoSSn0rXtCbTZ6GS6MGcKKqZd2oSVGktMx+p27S/7G77vRuSqKlE3awf467VPyLfNg/XMRC3rk9E2IIXM2aMtd3n+fWxwg/TCzWPuf/EbxXSDRvthkejFA4gztkqDzmeXj27AldrGVY+prZDA0MiiYxo4NAaOim7SirGDaZrQpubKKCR41mjlvODOZqk8e1kJb7W4C6HYznUEOaWgp6doZBBHE3kxob+kjmMohwh2pXIZRN2wtHikch1Ev2sMfFGJM3MUCTXONgOCmjU2TldFC/vSWXJiikkHEtaSOip4oruSQnkm+otjYRBqjsWUSF8bEYbNzFA0lexucFOq2ycrUhabjJM7VhY6Q8mjKr44x+zwT3lL6ps2Zbq+fbLI2IHgN538SuyC6WRlVN/aQxgs9HGQXMMrucm908FOV037x/CsaoL0NBuqRQ8nJdC9xZGC5/2tGT0XUqkllvByO1y4SyWbR3OoILg2Fvm2u9AjeuPXIKFku3gOhs1KCDNrTHznd9oSSul64KRqgvWf6N2RsYwNY0Bo8ABgKTbKmiU0sg04coAEhghhZqxRtYOTQAnbb7YiSRssNOghYB1BppnIWARAEyRwWGn/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB6AAADAQEBAQEAAAAAAAAAAAADBAUCAQAGBxAAAQMCBgICAQUAAAAAAAAAAQACAwQRBRIhMUFRIlIyYRORscHh8AEBAQEBAQEAAAAAAAAAAAAAAQIAAwQFEQEBAQACAQQCAwEAAAAAAAABAAIRMRIDIUFhEyIyQlGB/9oADAMBAAIRAxEAPwD8iX1bw3k2sotevym1y19gi0TIm1sAIniDZMXCi12xKbW8tkWtLTZc8BFpaSoZoM4b9lCzMZbnUq6bVgFrXS4DVFoLpA3comRnr4oxq/8AxUug7agWmGrq6k2gjNvY7KPLWv4n/WrjJ2x2YRmF53ueehoAn8Z/ZWPyPwBXXPA+iutzl3VIAvcFTzUFNqMSjZoXXUOw7ajKyIdXVR8G5G9lT++ujgl8D7n6fCYwc8hL3dlWenn592l2vXsVUNjjHAA/hXTAkrIY9CUOgnhaPPiYuQ0kk8Dtc31AqMLAbDXVR18G/qUcepr6J5wfdUpsKgi8iMx7K6Zxkpd6aheKMcBVTJ1GIxRj5C42Cl2EmVkRJXVXwaWM9ip/fXRwVfqdsxHhUO8xMhPJ/pJ6efn3jz18e0WDD4IRo1UZznoh0vbOOkjiBTzHFOmxIN8WC5207UO6jMAQ11Sbud+NvR3RxvXftPOT7n6fDoIvLLmd7O1KsxkodLPhoGiqLJLdi+y1qM/EHvcWwsLiuXnz0XTx/wBuMoqiU3mksPVqTC9seQdFRhpIYRZjBfvlWAdFKr2zN7BMWHzMA43/AGRzaQnrmhDqeKbJVSO5sodlZlb6COGONtmtAHQXX2Lny2y4ALWgSTtbyjmafLiDbkNUuiQpslS927rLm7rMSxk6XN0tZmxclE31UlWxvI7Xq5vPxTJq+9w1S7KjLT5Kh7zdzlyfUrMQC8qHS1gFnVE2g1MRmxOIuAUgwsN8rnXuSl2wYIWYlRy13rErWtBqeLR2Qvdxp2ky0rOsp2DfVdDJQsxlIGjVXEX/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABlAAACAwEBAAAAAAAAAAAAAAAFBgMEBwECEAACAgIBAgYCAgMAAAAAAAABAgADBAURIVEGEjEyQWET0SIzUnGxAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwAfa0CADkwLVaQLAHSBE9gEBaz9q5tONhp+W/5/xQd2MAaMSjFJsyX/AC3v7nb/AIB8CA2t1gdQQLqAAQI7rVRSSeAICpbmZW0dqsJilAPD5Hf6T9wLaY+Lr8fyVLx8k/JPcmBnu0yMnaZj1UOQlXqw7wNY4gTKIHMnLoxaHttsVEUckkwFhUyt0/ntD1YPxX6Pd9t2X6gHiKqKwqKFVRwAICN4i2rqopqPNlh8qiBc0WpGPijze5urHuYDr0gCdlucbBCp1suf+ulOrN+h9wKWJrcrNsTK2RBIPNdA9ifswGJiqDgQF3bbBKanJYDgQE/TYtmxzWzbQeOeKwfgQNIprCqAIC1sfET3XHD1ai27nh7vVE/ZgENPo0xSci9jbkP1ex+pMBjJAEATl5HkVusDN9ne+xzlw6yfLzzYfrtAf9bhpj0IqjjgQC4EAXqdRj4NShEAgHPQQK9rgCAjeINmKKn4PLHoo7mBV8Na5lX81nV3PLGA/ovA4gSgQJuOIHljADbDKFaMefiBmtQfbbMv61Vnp9mBpWHQK0UQCawJOIErQKN9oUGBnPiPY2WOuLSf52Hj/QgGtJrVxaEHEBpQcCBYSBMIHl34BgK+4z0opdmbgAQE/QYdmdlPm2j3H+A7CBoqIEUCBKpgW0gSdIA7Jv8AKpMDLtzkvsM9MOs9OeXgaFqsNcfHRQOOBAIPA4nUwLywPcD/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABwAAACAwEBAQAAAAAAAAAAAAAFBgECAwQABxAAAgIBAwMCBgMAAAAAAAAAAQIAAwQFESETMVESYRQiM0FCgSNSkgEBAQEBAQAAAAAAAAAAAAAAAQIAAwQRAQEAAwEBAAAAAAAAAAAAAAABAhExQSH/2gAMAwEAAhEDEQA/APnjmepxZGBVmKhgzjvtCKSYMXa0fULyx+ih/wBGT2ngnewrCqIgytOiWZmKhgWFjBRBi3kvZm5Hw9R4/NvAkdujwaroSilUUbACUC3q2QwZQvfeRldKh9InZzZGBZMdhAgGoZTsy0U82P2k0iGDhLi1Ad2PLHyYyaHV729KmZi5j0jLzLyeVRQJPbT4fWE6oc7wpgJqGaKVKryx4A8mRaU6dgmoG63m5+/t7SpGt2JmYBWdaFrY+BClz6NSRimwjmxi0MeNTa5nRIPn5aUVliZFqg3TsR7bPi715P018CbGe00cMsM2Mli3qrllFa93YKP3IyMHqKhXUiD7KBLkQ7ci9a0LGNqoXMep9RyOvZv0UPyj+x8yJN3Z4Yuw2E6hQwrMbDspksXduvqlK/ZAWMnuUPhmnRzBXL6lkGpSRSp/kbz7Cc+r4PVolaKqgADgCdGe/czIgzhyn2QyWCdHXqZOTcfPpEMfttbLkMRE6IRi41ePStaDgQk0pqTEvTMgwYC1O7p1OfaRaY10enpYaeW5MrCfE5CxlJbQKkxeiFHPECVdUY2WVUj83nPJUMtKBK1XwJ0nEVpMzeZkbRZBgzmubZTNSWaB19V8isTnPuSvDROiEbwL/9k="></img>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="product_item_name">Leather Gloves</h2>
                                    <p className="product_item_textcolor">Perfect mint green</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                        <div className="d-flex align-items-center product_item_cost">
                                            <span className="product_item_cost_span">$42.00</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1 ">
                                        <svg className="product_star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> 
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd">

                                            </path>
                                        </svg>
                                        <span className="product_item_review">4.5 (64 reviews)"</span>
                                    </div>
                                </div>
                           </div>
                        </li>

                        <li className="product_item" >
                           <div class = "position-relative d-flex flex-column product_item_header">
                             <a href="https://chisnghiax.com/ciseco/product-detail">
                                <div className="d-flex">
                                    <img className="img-fluid" alt="Ao" src="https://chisnghiax.com/ciseco/static/media/5.9ddc0dff360795c6f5b5.png"></img>
                                </div>
                             </a>
                             <div className="position-absolute d-flex justify-content-center product_item_size ">
                                <div className="btn-size justify-content-center align-items-center d-flex">XS</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">S</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">M</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">L</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">XL</div>
                             </div>
                           </div>

                           <div className="Product_item_colors">
                                <div className="d-flex">
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB8AAADAQEBAQAAAAAAAAAAAAACBAUDAQYAEAACAgEDAgMIAgMAAAAAAAABAgADBBEhQQUxEhNxIjJRUlNhgYIUwSMzcgEBAQEBAQAAAAAAAAAAAAAAAgABAwURAAIBBAEEAwEAAAAAAAAAAAABAhEhMVESIjJBkWFxgaH/2gAMAwEAAhEDEQA/APBF2M9k8o4FZpEaBNJGh7ASIEuBIjMtrIgC+nYGRGwr5JmmB6gdpGgl9JhGbN95hGTPIibd1JfGaqEN1nKr2Hq0Dn4SqxcfLsjL+FlZG+TksnwSo+ECXBvuf4i5JYXs9AT950CZM4EiF3t05mETL+por+TWDZb9NNz+TxA5pOiu9CUXl2QS4eReNcqzwr9Ks6D9jzN4t9z/ABFySx7ZQrqppQLWiosSogs42Qid2EqkE9wEiJWX1Gmj3m3PZRux9BBKajkUYuWBdMfqGbvaTjU/KP8AYw/qZSc89K15FWEcXe/BXx8fGxU8FFYUcnk+saioqiA226tnz3qnczTCZ/NuynavFTxkHRn7IvqZz5NukVUfGiq2O1dLqI1yD5zn5vdHoIlDdzOWrEhDn55/wIaqvrONz/yIKzn22W2KkI5u9IqYnTsTE9vQvae9j7tHGEY/ewym5fWhqy2IJLyOoAP5dYL2Hsi7mBzS+XoSi3fCCp6Zdf7ea+i8Uodv2MuDl3ejeSWPZdrrStFRFVVHZQNBGlRUQAi6iaQm1wHMyphMyeoVUglmEMppZYkm3ZC1WPn52jHWin5j75H2HEHXP4X9H0x+WXMTCxsRCKk0J95jux9TOkYqOAOTeRotNMF7MgAHfYcmREazqDuxFKhviza6H00nNz0NR2KrbmZreHGT2ebG2UTOUpdq/S4pd3oq4fScehvNsPm3fO3HoIowSdXdmObaorLRVLToEyewIDMImZGaE2OpPCiFySNSbJjG286udB8o7QXkOyHKqkA0iSC2XRoo0UAAdgIwglgOZEKXZSKDuNuZERrs1nJFZ/Y/1ObloajsXRCW13JPMyhtSjXQ2gjoFscWnQcTQjFtyoNTNIlZGcBrr+AO5hckjUqkwvZcfa7cCc6tjSSG6ccniJIxsp1YwGm0aQWxxawNJphr4RpIw8lbmFiQh1PLcD0nJz8I6KGzOql3bU/kzEhNpFejF+M6JAbKddQXsJoTYLNIKRHNxzpNI//Z"></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANQMBEQACEQEDEQH/xAB/AAACAwEBAAAAAAAAAAAAAAAEBQACAwEGEAABAwMABwYHAQAAAAAAAAABAAIDBAURBhIhIkFRoRMVMWKRkhQzQlJhsdEjAQADAQEBAAAAAAAAAAAAAAAAAgMBBAURAAICAgICAgMBAAAAAAAAAAABAgMREiExE0EEMiJRcWH/2gAMAwEAAhEDEQA/APe7F754nBMhAcEytMJlAEQB1aYdwUAZBAHcFAYZYNKDcMsGFZk3VlxGjJupfEY8Ss5DCK9tT+BK3WRmYlC6JvEJeR/xRk6qhbxTayZm0UDvuMDR4plVJiO2IJLeY2DOQAqKhk3ehBV6YW6EEPrIweQOseiqvjk3c30IJdOIZHatNBUTu8rVVUE3ZLPLSMO+9Jpt6GzlrfO7BT+KP7Qm/wDrOv01Ex1aalqZz5WqapSKOcmU+P0sqvkWnsweMp/uE2sF7RmZMs2y6WVJ/wB7jFCDwjGSjaCMwwmPQaKQh1XWVU5/JwEO2K9GqDH9JobaYcatFGfy/e/am/kD+FvvJ6OCzxRgBrA0cgMBSl8hjqgObb4GjgpO6RRUxAYqFjAAxgaOQGFR2iKsJFI3ikdg3iNBFEzacJd2xtIojp6ZnEIxNm5ggeS6wsBxhMqmxXbFCKfSqlDixkwe/wCyMGR3ozKdUIm7n6BO9LzLvRWyo1eb3NjPoSSn0rXtCbTZ6GS6MGcKKqZd2oSVGktMx+p27S/7G77vRuSqKlE3awf467VPyLfNg/XMRC3rk9E2IIXM2aMtd3n+fWxwg/TCzWPuf/EbxXSDRvthkejFA4gztkqDzmeXj27AldrGVY+prZDA0MiiYxo4NAaOim7SirGDaZrQpubKKCR41mjlvODOZqk8e1kJb7W4C6HYznUEOaWgp6doZBBHE3kxob+kjmMohwh2pXIZRN2wtHikch1Ev2sMfFGJM3MUCTXONgOCmjU2TldFC/vSWXJiikkHEtaSOip4oruSQnkm+otjYRBqjsWUSF8bEYbNzFA0lexucFOq2ycrUhabjJM7VhY6Q8mjKr44x+zwT3lL6ps2Zbq+fbLI2IHgN538SuyC6WRlVN/aQxgs9HGQXMMrucm908FOV037x/CsaoL0NBuqRQ8nJdC9xZGC5/2tGT0XUqkllvByO1y4SyWbR3OoILg2Fvm2u9AjeuPXIKFku3gOhs1KCDNrTHznd9oSSul64KRqgvWf6N2RsYwNY0Bo8ABgKTbKmiU0sg04coAEhghhZqxRtYOTQAnbb7YiSRssNOghYB1BppnIWARAEyRwWGn/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB6AAADAQEBAQEAAAAAAAAAAAADBAUCAQAGBxAAAQMCBgICAQUAAAAAAAAAAQACAwQRBRIhMUFRIlIyYRORscHh8AEBAQEBAQEAAAAAAAAAAAAAAQIAAwQFEQEBAQACAQQCAwEAAAAAAAABAAIRMRIDIUFhEyIyQlGB/9oADAMBAAIRAxEAPwD8iX1bw3k2sotevym1y19gi0TIm1sAIniDZMXCi12xKbW8tkWtLTZc8BFpaSoZoM4b9lCzMZbnUq6bVgFrXS4DVFoLpA3comRnr4oxq/8AxUug7agWmGrq6k2gjNvY7KPLWv4n/WrjJ2x2YRmF53ueehoAn8Z/ZWPyPwBXXPA+iutzl3VIAvcFTzUFNqMSjZoXXUOw7ajKyIdXVR8G5G9lT++ujgl8D7n6fCYwc8hL3dlWenn592l2vXsVUNjjHAA/hXTAkrIY9CUOgnhaPPiYuQ0kk8Dtc31AqMLAbDXVR18G/qUcepr6J5wfdUpsKgi8iMx7K6Zxkpd6aheKMcBVTJ1GIxRj5C42Cl2EmVkRJXVXwaWM9ip/fXRwVfqdsxHhUO8xMhPJ/pJ6efn3jz18e0WDD4IRo1UZznoh0vbOOkjiBTzHFOmxIN8WC5207UO6jMAQ11Sbud+NvR3RxvXftPOT7n6fDoIvLLmd7O1KsxkodLPhoGiqLJLdi+y1qM/EHvcWwsLiuXnz0XTx/wBuMoqiU3mksPVqTC9seQdFRhpIYRZjBfvlWAdFKr2zN7BMWHzMA43/AGRzaQnrmhDqeKbJVSO5sodlZlb6COGONtmtAHQXX2Lny2y4ALWgSTtbyjmafLiDbkNUuiQpslS927rLm7rMSxk6XN0tZmxclE31UlWxvI7Xq5vPxTJq+9w1S7KjLT5Kh7zdzlyfUrMQC8qHS1gFnVE2g1MRmxOIuAUgwsN8rnXuSl2wYIWYlRy13rErWtBqeLR2Qvdxp2ky0rOsp2DfVdDJQsxlIGjVXEX/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABlAAACAwEBAAAAAAAAAAAAAAAFBgMEBwECEAACAgIBAgYCAgMAAAAAAAABAgADBAURIVEGEjEyQWET0SIzUnGxAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwAfa0CADkwLVaQLAHSBE9gEBaz9q5tONhp+W/5/xQd2MAaMSjFJsyX/AC3v7nb/AIB8CA2t1gdQQLqAAQI7rVRSSeAICpbmZW0dqsJilAPD5Hf6T9wLaY+Lr8fyVLx8k/JPcmBnu0yMnaZj1UOQlXqw7wNY4gTKIHMnLoxaHttsVEUckkwFhUyt0/ntD1YPxX6Pd9t2X6gHiKqKwqKFVRwAICN4i2rqopqPNlh8qiBc0WpGPijze5urHuYDr0gCdlucbBCp1suf+ulOrN+h9wKWJrcrNsTK2RBIPNdA9ifswGJiqDgQF3bbBKanJYDgQE/TYtmxzWzbQeOeKwfgQNIprCqAIC1sfET3XHD1ai27nh7vVE/ZgENPo0xSci9jbkP1ex+pMBjJAEATl5HkVusDN9ne+xzlw6yfLzzYfrtAf9bhpj0IqjjgQC4EAXqdRj4NShEAgHPQQK9rgCAjeINmKKn4PLHoo7mBV8Na5lX81nV3PLGA/ovA4gSgQJuOIHljADbDKFaMefiBmtQfbbMv61Vnp9mBpWHQK0UQCawJOIErQKN9oUGBnPiPY2WOuLSf52Hj/QgGtJrVxaEHEBpQcCBYSBMIHl34BgK+4z0opdmbgAQE/QYdmdlPm2j3H+A7CBoqIEUCBKpgW0gSdIA7Jv8AKpMDLtzkvsM9MOs9OeXgaFqsNcfHRQOOBAIPA4nUwLywPcD/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABwAAACAwEBAQAAAAAAAAAAAAAFBgECAwQABxAAAgIBAwMCBgMAAAAAAAAAAQIAAwQFESETMVESYRQiM0FCgSNSkgEBAQEBAQAAAAAAAAAAAAAAAQIAAwQRAQEAAwEBAAAAAAAAAAAAAAABAhExQSH/2gAMAwEAAhEDEQA/APnjmepxZGBVmKhgzjvtCKSYMXa0fULyx+ih/wBGT2ngnewrCqIgytOiWZmKhgWFjBRBi3kvZm5Hw9R4/NvAkdujwaroSilUUbACUC3q2QwZQvfeRldKh9InZzZGBZMdhAgGoZTsy0U82P2k0iGDhLi1Ad2PLHyYyaHV729KmZi5j0jLzLyeVRQJPbT4fWE6oc7wpgJqGaKVKryx4A8mRaU6dgmoG63m5+/t7SpGt2JmYBWdaFrY+BClz6NSRimwjmxi0MeNTa5nRIPn5aUVliZFqg3TsR7bPi715P018CbGe00cMsM2Mli3qrllFa93YKP3IyMHqKhXUiD7KBLkQ7ci9a0LGNqoXMep9RyOvZv0UPyj+x8yJN3Z4Yuw2E6hQwrMbDspksXduvqlK/ZAWMnuUPhmnRzBXL6lkGpSRSp/kbz7Cc+r4PVolaKqgADgCdGe/czIgzhyn2QyWCdHXqZOTcfPpEMfttbLkMRE6IRi41ePStaDgQk0pqTEvTMgwYC1O7p1OfaRaY10enpYaeW5MrCfE5CxlJbQKkxeiFHPECVdUY2WVUj83nPJUMtKBK1XwJ0nEVpMzeZkbRZBgzmubZTNSWaB19V8isTnPuSvDROiEbwL/9k="></img>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="product_item_name">Leather Gloves</h2>
                                    <p className="product_item_textcolor">Perfect mint green</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                        <div className="d-flex align-items-center product_item_cost">
                                            <span className="product_item_cost_span">$42.00</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1 ">
                                        <svg className="product_star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> 
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd">

                                            </path>
                                        </svg>
                                        <span className="product_item_review">4.5 (64 reviews)"</span>
                                    </div>
                                </div>
                           </div>
                        </li>

                        <li className="product_item" >
                           <div class = "position-relative d-flex flex-column product_item_header">
                             <a href="https://chisnghiax.com/ciseco/product-detail">
                                <div className="d-flex">
                                    <img className="img-fluid" alt="Ao" src="https://chisnghiax.com/ciseco/static/media/5.9ddc0dff360795c6f5b5.png"></img>
                                </div>
                             </a>
                             <div className="position-absolute d-flex justify-content-center product_item_size ">
                                <div className="btn-size justify-content-center align-items-center d-flex">XS</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">S</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">M</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">L</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">XL</div>
                             </div>
                           </div>

                           <div className="Product_item_colors">
                                <div className="d-flex">
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB8AAADAQEBAQAAAAAAAAAAAAACBAUDAQYAEAACAgEDAgMIAgMAAAAAAAABAgADBBEhQQUxEhNxIjJRUlNhgYIUwSMzcgEBAQEBAQAAAAAAAAAAAAAAAgABAwURAAIBBAEEAwEAAAAAAAAAAAABAhEhMVESIjJBkWFxgaH/2gAMAwEAAhEDEQA/APBF2M9k8o4FZpEaBNJGh7ASIEuBIjMtrIgC+nYGRGwr5JmmB6gdpGgl9JhGbN95hGTPIibd1JfGaqEN1nKr2Hq0Dn4SqxcfLsjL+FlZG+TksnwSo+ECXBvuf4i5JYXs9AT950CZM4EiF3t05mETL+por+TWDZb9NNz+TxA5pOiu9CUXl2QS4eReNcqzwr9Ks6D9jzN4t9z/ABFySx7ZQrqppQLWiosSogs42Qid2EqkE9wEiJWX1Gmj3m3PZRux9BBKajkUYuWBdMfqGbvaTjU/KP8AYw/qZSc89K15FWEcXe/BXx8fGxU8FFYUcnk+saioqiA226tnz3qnczTCZ/NuynavFTxkHRn7IvqZz5NukVUfGiq2O1dLqI1yD5zn5vdHoIlDdzOWrEhDn55/wIaqvrONz/yIKzn22W2KkI5u9IqYnTsTE9vQvae9j7tHGEY/ewym5fWhqy2IJLyOoAP5dYL2Hsi7mBzS+XoSi3fCCp6Zdf7ea+i8Uodv2MuDl3ejeSWPZdrrStFRFVVHZQNBGlRUQAi6iaQm1wHMyphMyeoVUglmEMppZYkm3ZC1WPn52jHWin5j75H2HEHXP4X9H0x+WXMTCxsRCKk0J95jux9TOkYqOAOTeRotNMF7MgAHfYcmREazqDuxFKhviza6H00nNz0NR2KrbmZreHGT2ebG2UTOUpdq/S4pd3oq4fScehvNsPm3fO3HoIowSdXdmObaorLRVLToEyewIDMImZGaE2OpPCiFySNSbJjG286udB8o7QXkOyHKqkA0iSC2XRoo0UAAdgIwglgOZEKXZSKDuNuZERrs1nJFZ/Y/1ObloajsXRCW13JPMyhtSjXQ2gjoFscWnQcTQjFtyoNTNIlZGcBrr+AO5hckjUqkwvZcfa7cCc6tjSSG6ccniJIxsp1YwGm0aQWxxawNJphr4RpIw8lbmFiQh1PLcD0nJz8I6KGzOql3bU/kzEhNpFejF+M6JAbKddQXsJoTYLNIKRHNxzpNI//Z"></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANQMBEQACEQEDEQH/xAB/AAACAwEBAAAAAAAAAAAAAAAEBQACAwEGEAABAwMABwYHAQAAAAAAAAABAAIDBAURBhIhIkFRoRMVMWKRkhQzQlJhsdEjAQADAQEBAAAAAAAAAAAAAAAAAgMBBAURAAICAgICAgMBAAAAAAAAAAABAgMREiExE0EEMiJRcWH/2gAMAwEAAhEDEQA/APe7F754nBMhAcEytMJlAEQB1aYdwUAZBAHcFAYZYNKDcMsGFZk3VlxGjJupfEY8Ss5DCK9tT+BK3WRmYlC6JvEJeR/xRk6qhbxTayZm0UDvuMDR4plVJiO2IJLeY2DOQAqKhk3ehBV6YW6EEPrIweQOseiqvjk3c30IJdOIZHatNBUTu8rVVUE3ZLPLSMO+9Jpt6GzlrfO7BT+KP7Qm/wDrOv01Ex1aalqZz5WqapSKOcmU+P0sqvkWnsweMp/uE2sF7RmZMs2y6WVJ/wB7jFCDwjGSjaCMwwmPQaKQh1XWVU5/JwEO2K9GqDH9JobaYcatFGfy/e/am/kD+FvvJ6OCzxRgBrA0cgMBSl8hjqgObb4GjgpO6RRUxAYqFjAAxgaOQGFR2iKsJFI3ikdg3iNBFEzacJd2xtIojp6ZnEIxNm5ggeS6wsBxhMqmxXbFCKfSqlDixkwe/wCyMGR3ozKdUIm7n6BO9LzLvRWyo1eb3NjPoSSn0rXtCbTZ6GS6MGcKKqZd2oSVGktMx+p27S/7G77vRuSqKlE3awf467VPyLfNg/XMRC3rk9E2IIXM2aMtd3n+fWxwg/TCzWPuf/EbxXSDRvthkejFA4gztkqDzmeXj27AldrGVY+prZDA0MiiYxo4NAaOim7SirGDaZrQpubKKCR41mjlvODOZqk8e1kJb7W4C6HYznUEOaWgp6doZBBHE3kxob+kjmMohwh2pXIZRN2wtHikch1Ev2sMfFGJM3MUCTXONgOCmjU2TldFC/vSWXJiikkHEtaSOip4oruSQnkm+otjYRBqjsWUSF8bEYbNzFA0lexucFOq2ycrUhabjJM7VhY6Q8mjKr44x+zwT3lL6ps2Zbq+fbLI2IHgN538SuyC6WRlVN/aQxgs9HGQXMMrucm908FOV037x/CsaoL0NBuqRQ8nJdC9xZGC5/2tGT0XUqkllvByO1y4SyWbR3OoILg2Fvm2u9AjeuPXIKFku3gOhs1KCDNrTHznd9oSSul64KRqgvWf6N2RsYwNY0Bo8ABgKTbKmiU0sg04coAEhghhZqxRtYOTQAnbb7YiSRssNOghYB1BppnIWARAEyRwWGn/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB6AAADAQEBAQEAAAAAAAAAAAADBAUCAQAGBxAAAQMCBgICAQUAAAAAAAAAAQACAwQRBRIhMUFRIlIyYRORscHh8AEBAQEBAQEAAAAAAAAAAAAAAQIAAwQFEQEBAQACAQQCAwEAAAAAAAABAAIRMRIDIUFhEyIyQlGB/9oADAMBAAIRAxEAPwD8iX1bw3k2sotevym1y19gi0TIm1sAIniDZMXCi12xKbW8tkWtLTZc8BFpaSoZoM4b9lCzMZbnUq6bVgFrXS4DVFoLpA3comRnr4oxq/8AxUug7agWmGrq6k2gjNvY7KPLWv4n/WrjJ2x2YRmF53ueehoAn8Z/ZWPyPwBXXPA+iutzl3VIAvcFTzUFNqMSjZoXXUOw7ajKyIdXVR8G5G9lT++ujgl8D7n6fCYwc8hL3dlWenn592l2vXsVUNjjHAA/hXTAkrIY9CUOgnhaPPiYuQ0kk8Dtc31AqMLAbDXVR18G/qUcepr6J5wfdUpsKgi8iMx7K6Zxkpd6aheKMcBVTJ1GIxRj5C42Cl2EmVkRJXVXwaWM9ip/fXRwVfqdsxHhUO8xMhPJ/pJ6efn3jz18e0WDD4IRo1UZznoh0vbOOkjiBTzHFOmxIN8WC5207UO6jMAQ11Sbud+NvR3RxvXftPOT7n6fDoIvLLmd7O1KsxkodLPhoGiqLJLdi+y1qM/EHvcWwsLiuXnz0XTx/wBuMoqiU3mksPVqTC9seQdFRhpIYRZjBfvlWAdFKr2zN7BMWHzMA43/AGRzaQnrmhDqeKbJVSO5sodlZlb6COGONtmtAHQXX2Lny2y4ALWgSTtbyjmafLiDbkNUuiQpslS927rLm7rMSxk6XN0tZmxclE31UlWxvI7Xq5vPxTJq+9w1S7KjLT5Kh7zdzlyfUrMQC8qHS1gFnVE2g1MRmxOIuAUgwsN8rnXuSl2wYIWYlRy13rErWtBqeLR2Qvdxp2ky0rOsp2DfVdDJQsxlIGjVXEX/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABlAAACAwEBAAAAAAAAAAAAAAAFBgMEBwECEAACAgIBAgYCAgMAAAAAAAABAgADBAURIVEGEjEyQWET0SIzUnGxAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwAfa0CADkwLVaQLAHSBE9gEBaz9q5tONhp+W/5/xQd2MAaMSjFJsyX/AC3v7nb/AIB8CA2t1gdQQLqAAQI7rVRSSeAICpbmZW0dqsJilAPD5Hf6T9wLaY+Lr8fyVLx8k/JPcmBnu0yMnaZj1UOQlXqw7wNY4gTKIHMnLoxaHttsVEUckkwFhUyt0/ntD1YPxX6Pd9t2X6gHiKqKwqKFVRwAICN4i2rqopqPNlh8qiBc0WpGPijze5urHuYDr0gCdlucbBCp1suf+ulOrN+h9wKWJrcrNsTK2RBIPNdA9ifswGJiqDgQF3bbBKanJYDgQE/TYtmxzWzbQeOeKwfgQNIprCqAIC1sfET3XHD1ai27nh7vVE/ZgENPo0xSci9jbkP1ex+pMBjJAEATl5HkVusDN9ne+xzlw6yfLzzYfrtAf9bhpj0IqjjgQC4EAXqdRj4NShEAgHPQQK9rgCAjeINmKKn4PLHoo7mBV8Na5lX81nV3PLGA/ovA4gSgQJuOIHljADbDKFaMefiBmtQfbbMv61Vnp9mBpWHQK0UQCawJOIErQKN9oUGBnPiPY2WOuLSf52Hj/QgGtJrVxaEHEBpQcCBYSBMIHl34BgK+4z0opdmbgAQE/QYdmdlPm2j3H+A7CBoqIEUCBKpgW0gSdIA7Jv8AKpMDLtzkvsM9MOs9OeXgaFqsNcfHRQOOBAIPA4nUwLywPcD/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABwAAACAwEBAQAAAAAAAAAAAAAFBgECAwQABxAAAgIBAwMCBgMAAAAAAAAAAQIAAwQFESETMVESYRQiM0FCgSNSkgEBAQEBAQAAAAAAAAAAAAAAAQIAAwQRAQEAAwEBAAAAAAAAAAAAAAABAhExQSH/2gAMAwEAAhEDEQA/APnjmepxZGBVmKhgzjvtCKSYMXa0fULyx+ih/wBGT2ngnewrCqIgytOiWZmKhgWFjBRBi3kvZm5Hw9R4/NvAkdujwaroSilUUbACUC3q2QwZQvfeRldKh9InZzZGBZMdhAgGoZTsy0U82P2k0iGDhLi1Ad2PLHyYyaHV729KmZi5j0jLzLyeVRQJPbT4fWE6oc7wpgJqGaKVKryx4A8mRaU6dgmoG63m5+/t7SpGt2JmYBWdaFrY+BClz6NSRimwjmxi0MeNTa5nRIPn5aUVliZFqg3TsR7bPi715P018CbGe00cMsM2Mli3qrllFa93YKP3IyMHqKhXUiD7KBLkQ7ci9a0LGNqoXMep9RyOvZv0UPyj+x8yJN3Z4Yuw2E6hQwrMbDspksXduvqlK/ZAWMnuUPhmnRzBXL6lkGpSRSp/kbz7Cc+r4PVolaKqgADgCdGe/czIgzhyn2QyWCdHXqZOTcfPpEMfttbLkMRE6IRi41ePStaDgQk0pqTEvTMgwYC1O7p1OfaRaY10enpYaeW5MrCfE5CxlJbQKkxeiFHPECVdUY2WVUj83nPJUMtKBK1XwJ0nEVpMzeZkbRZBgzmubZTNSWaB19V8isTnPuSvDROiEbwL/9k="></img>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="product_item_name">Leather Gloves</h2>
                                    <p className="product_item_textcolor">Perfect mint green</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                        <div className="d-flex align-items-center product_item_cost">
                                            <span className="product_item_cost_span">$42.00</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1 ">
                                        <svg className="product_star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> 
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd">

                                            </path>
                                        </svg>
                                        <span className="product_item_review">4.5 (64 reviews)"</span>
                                    </div>
                                </div>
                           </div>
                        </li>

                        <li className="product_item" >
                           <div class = "position-relative d-flex flex-column product_item_header">
                             <a href="https://chisnghiax.com/ciseco/product-detail">
                                <div className="d-flex">
                                    <img className="img-fluid" alt="Ao" src="https://chisnghiax.com/ciseco/static/media/5.9ddc0dff360795c6f5b5.png"></img>
                                </div>
                             </a>
                             <div className="position-absolute d-flex justify-content-center product_item_size ">
                                <div className="btn-size justify-content-center align-items-center d-flex">XS</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">S</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">M</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">L</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">XL</div>
                             </div>
                           </div>

                           <div className="Product_item_colors">
                                <div className="d-flex">
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB8AAADAQEBAQAAAAAAAAAAAAACBAUDAQYAEAACAgEDAgMIAgMAAAAAAAABAgADBBEhQQUxEhNxIjJRUlNhgYIUwSMzcgEBAQEBAQAAAAAAAAAAAAAAAgABAwURAAIBBAEEAwEAAAAAAAAAAAABAhEhMVESIjJBkWFxgaH/2gAMAwEAAhEDEQA/APBF2M9k8o4FZpEaBNJGh7ASIEuBIjMtrIgC+nYGRGwr5JmmB6gdpGgl9JhGbN95hGTPIibd1JfGaqEN1nKr2Hq0Dn4SqxcfLsjL+FlZG+TksnwSo+ECXBvuf4i5JYXs9AT950CZM4EiF3t05mETL+por+TWDZb9NNz+TxA5pOiu9CUXl2QS4eReNcqzwr9Ks6D9jzN4t9z/ABFySx7ZQrqppQLWiosSogs42Qid2EqkE9wEiJWX1Gmj3m3PZRux9BBKajkUYuWBdMfqGbvaTjU/KP8AYw/qZSc89K15FWEcXe/BXx8fGxU8FFYUcnk+saioqiA226tnz3qnczTCZ/NuynavFTxkHRn7IvqZz5NukVUfGiq2O1dLqI1yD5zn5vdHoIlDdzOWrEhDn55/wIaqvrONz/yIKzn22W2KkI5u9IqYnTsTE9vQvae9j7tHGEY/ewym5fWhqy2IJLyOoAP5dYL2Hsi7mBzS+XoSi3fCCp6Zdf7ea+i8Uodv2MuDl3ejeSWPZdrrStFRFVVHZQNBGlRUQAi6iaQm1wHMyphMyeoVUglmEMppZYkm3ZC1WPn52jHWin5j75H2HEHXP4X9H0x+WXMTCxsRCKk0J95jux9TOkYqOAOTeRotNMF7MgAHfYcmREazqDuxFKhviza6H00nNz0NR2KrbmZreHGT2ebG2UTOUpdq/S4pd3oq4fScehvNsPm3fO3HoIowSdXdmObaorLRVLToEyewIDMImZGaE2OpPCiFySNSbJjG286udB8o7QXkOyHKqkA0iSC2XRoo0UAAdgIwglgOZEKXZSKDuNuZERrs1nJFZ/Y/1ObloajsXRCW13JPMyhtSjXQ2gjoFscWnQcTQjFtyoNTNIlZGcBrr+AO5hckjUqkwvZcfa7cCc6tjSSG6ccniJIxsp1YwGm0aQWxxawNJphr4RpIw8lbmFiQh1PLcD0nJz8I6KGzOql3bU/kzEhNpFejF+M6JAbKddQXsJoTYLNIKRHNxzpNI//Z"></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANQMBEQACEQEDEQH/xAB/AAACAwEBAAAAAAAAAAAAAAAEBQACAwEGEAABAwMABwYHAQAAAAAAAAABAAIDBAURBhIhIkFRoRMVMWKRkhQzQlJhsdEjAQADAQEBAAAAAAAAAAAAAAAAAgMBBAURAAICAgICAgMBAAAAAAAAAAABAgMREiExE0EEMiJRcWH/2gAMAwEAAhEDEQA/APe7F754nBMhAcEytMJlAEQB1aYdwUAZBAHcFAYZYNKDcMsGFZk3VlxGjJupfEY8Ss5DCK9tT+BK3WRmYlC6JvEJeR/xRk6qhbxTayZm0UDvuMDR4plVJiO2IJLeY2DOQAqKhk3ehBV6YW6EEPrIweQOseiqvjk3c30IJdOIZHatNBUTu8rVVUE3ZLPLSMO+9Jpt6GzlrfO7BT+KP7Qm/wDrOv01Ex1aalqZz5WqapSKOcmU+P0sqvkWnsweMp/uE2sF7RmZMs2y6WVJ/wB7jFCDwjGSjaCMwwmPQaKQh1XWVU5/JwEO2K9GqDH9JobaYcatFGfy/e/am/kD+FvvJ6OCzxRgBrA0cgMBSl8hjqgObb4GjgpO6RRUxAYqFjAAxgaOQGFR2iKsJFI3ikdg3iNBFEzacJd2xtIojp6ZnEIxNm5ggeS6wsBxhMqmxXbFCKfSqlDixkwe/wCyMGR3ozKdUIm7n6BO9LzLvRWyo1eb3NjPoSSn0rXtCbTZ6GS6MGcKKqZd2oSVGktMx+p27S/7G77vRuSqKlE3awf467VPyLfNg/XMRC3rk9E2IIXM2aMtd3n+fWxwg/TCzWPuf/EbxXSDRvthkejFA4gztkqDzmeXj27AldrGVY+prZDA0MiiYxo4NAaOim7SirGDaZrQpubKKCR41mjlvODOZqk8e1kJb7W4C6HYznUEOaWgp6doZBBHE3kxob+kjmMohwh2pXIZRN2wtHikch1Ev2sMfFGJM3MUCTXONgOCmjU2TldFC/vSWXJiikkHEtaSOip4oruSQnkm+otjYRBqjsWUSF8bEYbNzFA0lexucFOq2ycrUhabjJM7VhY6Q8mjKr44x+zwT3lL6ps2Zbq+fbLI2IHgN538SuyC6WRlVN/aQxgs9HGQXMMrucm908FOV037x/CsaoL0NBuqRQ8nJdC9xZGC5/2tGT0XUqkllvByO1y4SyWbR3OoILg2Fvm2u9AjeuPXIKFku3gOhs1KCDNrTHznd9oSSul64KRqgvWf6N2RsYwNY0Bo8ABgKTbKmiU0sg04coAEhghhZqxRtYOTQAnbb7YiSRssNOghYB1BppnIWARAEyRwWGn/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB6AAADAQEBAQEAAAAAAAAAAAADBAUCAQAGBxAAAQMCBgICAQUAAAAAAAAAAQACAwQRBRIhMUFRIlIyYRORscHh8AEBAQEBAQEAAAAAAAAAAAAAAQIAAwQFEQEBAQACAQQCAwEAAAAAAAABAAIRMRIDIUFhEyIyQlGB/9oADAMBAAIRAxEAPwD8iX1bw3k2sotevym1y19gi0TIm1sAIniDZMXCi12xKbW8tkWtLTZc8BFpaSoZoM4b9lCzMZbnUq6bVgFrXS4DVFoLpA3comRnr4oxq/8AxUug7agWmGrq6k2gjNvY7KPLWv4n/WrjJ2x2YRmF53ueehoAn8Z/ZWPyPwBXXPA+iutzl3VIAvcFTzUFNqMSjZoXXUOw7ajKyIdXVR8G5G9lT++ujgl8D7n6fCYwc8hL3dlWenn592l2vXsVUNjjHAA/hXTAkrIY9CUOgnhaPPiYuQ0kk8Dtc31AqMLAbDXVR18G/qUcepr6J5wfdUpsKgi8iMx7K6Zxkpd6aheKMcBVTJ1GIxRj5C42Cl2EmVkRJXVXwaWM9ip/fXRwVfqdsxHhUO8xMhPJ/pJ6efn3jz18e0WDD4IRo1UZznoh0vbOOkjiBTzHFOmxIN8WC5207UO6jMAQ11Sbud+NvR3RxvXftPOT7n6fDoIvLLmd7O1KsxkodLPhoGiqLJLdi+y1qM/EHvcWwsLiuXnz0XTx/wBuMoqiU3mksPVqTC9seQdFRhpIYRZjBfvlWAdFKr2zN7BMWHzMA43/AGRzaQnrmhDqeKbJVSO5sodlZlb6COGONtmtAHQXX2Lny2y4ALWgSTtbyjmafLiDbkNUuiQpslS927rLm7rMSxk6XN0tZmxclE31UlWxvI7Xq5vPxTJq+9w1S7KjLT5Kh7zdzlyfUrMQC8qHS1gFnVE2g1MRmxOIuAUgwsN8rnXuSl2wYIWYlRy13rErWtBqeLR2Qvdxp2ky0rOsp2DfVdDJQsxlIGjVXEX/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABlAAACAwEBAAAAAAAAAAAAAAAFBgMEBwECEAACAgIBAgYCAgMAAAAAAAABAgADBAURIVEGEjEyQWET0SIzUnGxAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwAfa0CADkwLVaQLAHSBE9gEBaz9q5tONhp+W/5/xQd2MAaMSjFJsyX/AC3v7nb/AIB8CA2t1gdQQLqAAQI7rVRSSeAICpbmZW0dqsJilAPD5Hf6T9wLaY+Lr8fyVLx8k/JPcmBnu0yMnaZj1UOQlXqw7wNY4gTKIHMnLoxaHttsVEUckkwFhUyt0/ntD1YPxX6Pd9t2X6gHiKqKwqKFVRwAICN4i2rqopqPNlh8qiBc0WpGPijze5urHuYDr0gCdlucbBCp1suf+ulOrN+h9wKWJrcrNsTK2RBIPNdA9ifswGJiqDgQF3bbBKanJYDgQE/TYtmxzWzbQeOeKwfgQNIprCqAIC1sfET3XHD1ai27nh7vVE/ZgENPo0xSci9jbkP1ex+pMBjJAEATl5HkVusDN9ne+xzlw6yfLzzYfrtAf9bhpj0IqjjgQC4EAXqdRj4NShEAgHPQQK9rgCAjeINmKKn4PLHoo7mBV8Na5lX81nV3PLGA/ovA4gSgQJuOIHljADbDKFaMefiBmtQfbbMv61Vnp9mBpWHQK0UQCawJOIErQKN9oUGBnPiPY2WOuLSf52Hj/QgGtJrVxaEHEBpQcCBYSBMIHl34BgK+4z0opdmbgAQE/QYdmdlPm2j3H+A7CBoqIEUCBKpgW0gSdIA7Jv8AKpMDLtzkvsM9MOs9OeXgaFqsNcfHRQOOBAIPA4nUwLywPcD/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABwAAACAwEBAQAAAAAAAAAAAAAFBgECAwQABxAAAgIBAwMCBgMAAAAAAAAAAQIAAwQFESETMVESYRQiM0FCgSNSkgEBAQEBAQAAAAAAAAAAAAAAAQIAAwQRAQEAAwEBAAAAAAAAAAAAAAABAhExQSH/2gAMAwEAAhEDEQA/APnjmepxZGBVmKhgzjvtCKSYMXa0fULyx+ih/wBGT2ngnewrCqIgytOiWZmKhgWFjBRBi3kvZm5Hw9R4/NvAkdujwaroSilUUbACUC3q2QwZQvfeRldKh9InZzZGBZMdhAgGoZTsy0U82P2k0iGDhLi1Ad2PLHyYyaHV729KmZi5j0jLzLyeVRQJPbT4fWE6oc7wpgJqGaKVKryx4A8mRaU6dgmoG63m5+/t7SpGt2JmYBWdaFrY+BClz6NSRimwjmxi0MeNTa5nRIPn5aUVliZFqg3TsR7bPi715P018CbGe00cMsM2Mli3qrllFa93YKP3IyMHqKhXUiD7KBLkQ7ci9a0LGNqoXMep9RyOvZv0UPyj+x8yJN3Z4Yuw2E6hQwrMbDspksXduvqlK/ZAWMnuUPhmnRzBXL6lkGpSRSp/kbz7Cc+r4PVolaKqgADgCdGe/czIgzhyn2QyWCdHXqZOTcfPpEMfttbLkMRE6IRi41ePStaDgQk0pqTEvTMgwYC1O7p1OfaRaY10enpYaeW5MrCfE5CxlJbQKkxeiFHPECVdUY2WVUj83nPJUMtKBK1XwJ0nEVpMzeZkbRZBgzmubZTNSWaB19V8isTnPuSvDROiEbwL/9k="></img>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="product_item_name">Leather Gloves</h2>
                                    <p className="product_item_textcolor">Perfect mint green</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                        <div className="d-flex align-items-center product_item_cost">
                                            <span className="product_item_cost_span">$42.00</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1 ">
                                        <svg className="product_star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> 
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd">

                                            </path>
                                        </svg>
                                        <span className="product_item_review">4.5 (64 reviews)"</span>
                                    </div>
                                </div>
                           </div>
                        </li>
                        
                        <li className="product_item" >
                           <div class = "position-relative d-flex flex-column product_item_header">
                             <a href="https://chisnghiax.com/ciseco/product-detail">
                                <div className="d-flex">
                                    <img className="img-fluid" alt="Ao" src="https://chisnghiax.com/ciseco/static/media/5.9ddc0dff360795c6f5b5.png"></img>
                                </div>
                             </a>
                             <div className="position-absolute d-flex justify-content-center product_item_size ">
                                <div className="btn-size justify-content-center align-items-center d-flex">XS</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">S</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">M</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">L</div>
                                <div className="btn-size justify-content-center align-items-center d-flex">XL</div>
                             </div>
                           </div>

                           <div className="Product_item_colors">
                                <div className="d-flex">
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB8AAADAQEBAQAAAAAAAAAAAAACBAUDAQYAEAACAgEDAgMIAgMAAAAAAAABAgADBBEhQQUxEhNxIjJRUlNhgYIUwSMzcgEBAQEBAQAAAAAAAAAAAAAAAgABAwURAAIBBAEEAwEAAAAAAAAAAAABAhEhMVESIjJBkWFxgaH/2gAMAwEAAhEDEQA/APBF2M9k8o4FZpEaBNJGh7ASIEuBIjMtrIgC+nYGRGwr5JmmB6gdpGgl9JhGbN95hGTPIibd1JfGaqEN1nKr2Hq0Dn4SqxcfLsjL+FlZG+TksnwSo+ECXBvuf4i5JYXs9AT950CZM4EiF3t05mETL+por+TWDZb9NNz+TxA5pOiu9CUXl2QS4eReNcqzwr9Ks6D9jzN4t9z/ABFySx7ZQrqppQLWiosSogs42Qid2EqkE9wEiJWX1Gmj3m3PZRux9BBKajkUYuWBdMfqGbvaTjU/KP8AYw/qZSc89K15FWEcXe/BXx8fGxU8FFYUcnk+saioqiA226tnz3qnczTCZ/NuynavFTxkHRn7IvqZz5NukVUfGiq2O1dLqI1yD5zn5vdHoIlDdzOWrEhDn55/wIaqvrONz/yIKzn22W2KkI5u9IqYnTsTE9vQvae9j7tHGEY/ewym5fWhqy2IJLyOoAP5dYL2Hsi7mBzS+XoSi3fCCp6Zdf7ea+i8Uodv2MuDl3ejeSWPZdrrStFRFVVHZQNBGlRUQAi6iaQm1wHMyphMyeoVUglmEMppZYkm3ZC1WPn52jHWin5j75H2HEHXP4X9H0x+WXMTCxsRCKk0J95jux9TOkYqOAOTeRotNMF7MgAHfYcmREazqDuxFKhviza6H00nNz0NR2KrbmZreHGT2ebG2UTOUpdq/S4pd3oq4fScehvNsPm3fO3HoIowSdXdmObaorLRVLToEyewIDMImZGaE2OpPCiFySNSbJjG286udB8o7QXkOyHKqkA0iSC2XRoo0UAAdgIwglgOZEKXZSKDuNuZERrs1nJFZ/Y/1ObloajsXRCW13JPMyhtSjXQ2gjoFscWnQcTQjFtyoNTNIlZGcBrr+AO5hckjUqkwvZcfa7cCc6tjSSG6ccniJIxsp1YwGm0aQWxxawNJphr4RpIw8lbmFiQh1PLcD0nJz8I6KGzOql3bU/kzEhNpFejF+M6JAbKddQXsJoTYLNIKRHNxzpNI//Z"></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANQMBEQACEQEDEQH/xAB/AAACAwEBAAAAAAAAAAAAAAAEBQACAwEGEAABAwMABwYHAQAAAAAAAAABAAIDBAURBhIhIkFRoRMVMWKRkhQzQlJhsdEjAQADAQEBAAAAAAAAAAAAAAAAAgMBBAURAAICAgICAgMBAAAAAAAAAAABAgMREiExE0EEMiJRcWH/2gAMAwEAAhEDEQA/APe7F754nBMhAcEytMJlAEQB1aYdwUAZBAHcFAYZYNKDcMsGFZk3VlxGjJupfEY8Ss5DCK9tT+BK3WRmYlC6JvEJeR/xRk6qhbxTayZm0UDvuMDR4plVJiO2IJLeY2DOQAqKhk3ehBV6YW6EEPrIweQOseiqvjk3c30IJdOIZHatNBUTu8rVVUE3ZLPLSMO+9Jpt6GzlrfO7BT+KP7Qm/wDrOv01Ex1aalqZz5WqapSKOcmU+P0sqvkWnsweMp/uE2sF7RmZMs2y6WVJ/wB7jFCDwjGSjaCMwwmPQaKQh1XWVU5/JwEO2K9GqDH9JobaYcatFGfy/e/am/kD+FvvJ6OCzxRgBrA0cgMBSl8hjqgObb4GjgpO6RRUxAYqFjAAxgaOQGFR2iKsJFI3ikdg3iNBFEzacJd2xtIojp6ZnEIxNm5ggeS6wsBxhMqmxXbFCKfSqlDixkwe/wCyMGR3ozKdUIm7n6BO9LzLvRWyo1eb3NjPoSSn0rXtCbTZ6GS6MGcKKqZd2oSVGktMx+p27S/7G77vRuSqKlE3awf467VPyLfNg/XMRC3rk9E2IIXM2aMtd3n+fWxwg/TCzWPuf/EbxXSDRvthkejFA4gztkqDzmeXj27AldrGVY+prZDA0MiiYxo4NAaOim7SirGDaZrQpubKKCR41mjlvODOZqk8e1kJb7W4C6HYznUEOaWgp6doZBBHE3kxob+kjmMohwh2pXIZRN2wtHikch1Ev2sMfFGJM3MUCTXONgOCmjU2TldFC/vSWXJiikkHEtaSOip4oruSQnkm+otjYRBqjsWUSF8bEYbNzFA0lexucFOq2ycrUhabjJM7VhY6Q8mjKr44x+zwT3lL6ps2Zbq+fbLI2IHgN538SuyC6WRlVN/aQxgs9HGQXMMrucm908FOV037x/CsaoL0NBuqRQ8nJdC9xZGC5/2tGT0XUqkllvByO1y4SyWbR3OoILg2Fvm2u9AjeuPXIKFku3gOhs1KCDNrTHznd9oSSul64KRqgvWf6N2RsYwNY0Bo8ABgKTbKmiU0sg04coAEhghhZqxRtYOTQAnbb7YiSRssNOghYB1BppnIWARAEyRwWGn/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xAB6AAADAQEBAQEAAAAAAAAAAAADBAUCAQAGBxAAAQMCBgICAQUAAAAAAAAAAQACAwQRBRIhMUFRIlIyYRORscHh8AEBAQEBAQEAAAAAAAAAAAAAAQIAAwQFEQEBAQACAQQCAwEAAAAAAAABAAIRMRIDIUFhEyIyQlGB/9oADAMBAAIRAxEAPwD8iX1bw3k2sotevym1y19gi0TIm1sAIniDZMXCi12xKbW8tkWtLTZc8BFpaSoZoM4b9lCzMZbnUq6bVgFrXS4DVFoLpA3comRnr4oxq/8AxUug7agWmGrq6k2gjNvY7KPLWv4n/WrjJ2x2YRmF53ueehoAn8Z/ZWPyPwBXXPA+iutzl3VIAvcFTzUFNqMSjZoXXUOw7ajKyIdXVR8G5G9lT++ujgl8D7n6fCYwc8hL3dlWenn592l2vXsVUNjjHAA/hXTAkrIY9CUOgnhaPPiYuQ0kk8Dtc31AqMLAbDXVR18G/qUcepr6J5wfdUpsKgi8iMx7K6Zxkpd6aheKMcBVTJ1GIxRj5C42Cl2EmVkRJXVXwaWM9ip/fXRwVfqdsxHhUO8xMhPJ/pJ6efn3jz18e0WDD4IRo1UZznoh0vbOOkjiBTzHFOmxIN8WC5207UO6jMAQ11Sbud+NvR3RxvXftPOT7n6fDoIvLLmd7O1KsxkodLPhoGiqLJLdi+y1qM/EHvcWwsLiuXnz0XTx/wBuMoqiU3mksPVqTC9seQdFRhpIYRZjBfvlWAdFKr2zN7BMWHzMA43/AGRzaQnrmhDqeKbJVSO5sodlZlb6COGONtmtAHQXX2Lny2y4ALWgSTtbyjmafLiDbkNUuiQpslS927rLm7rMSxk6XN0tZmxclE31UlWxvI7Xq5vPxTJq+9w1S7KjLT5Kh7zdzlyfUrMQC8qHS1gFnVE2g1MRmxOIuAUgwsN8rnXuSl2wYIWYlRy13rErWtBqeLR2Qvdxp2ky0rOsp2DfVdDJQsxlIGjVXEX/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABlAAACAwEBAAAAAAAAAAAAAAAFBgMEBwECEAACAgIBAgYCAgMAAAAAAAABAgADBAURIVEGEjEyQWET0SIzUnGxAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwAfa0CADkwLVaQLAHSBE9gEBaz9q5tONhp+W/5/xQd2MAaMSjFJsyX/AC3v7nb/AIB8CA2t1gdQQLqAAQI7rVRSSeAICpbmZW0dqsJilAPD5Hf6T9wLaY+Lr8fyVLx8k/JPcmBnu0yMnaZj1UOQlXqw7wNY4gTKIHMnLoxaHttsVEUckkwFhUyt0/ntD1YPxX6Pd9t2X6gHiKqKwqKFVRwAICN4i2rqopqPNlh8qiBc0WpGPijze5urHuYDr0gCdlucbBCp1suf+ulOrN+h9wKWJrcrNsTK2RBIPNdA9ifswGJiqDgQF3bbBKanJYDgQE/TYtmxzWzbQeOeKwfgQNIprCqAIC1sfET3XHD1ai27nh7vVE/ZgENPo0xSci9jbkP1ex+pMBjJAEATl5HkVusDN9ne+xzlw6yfLzzYfrtAf9bhpj0IqjjgQC4EAXqdRj4NShEAgHPQQK9rgCAjeINmKKn4PLHoo7mBV8Na5lX81nV3PLGA/ovA4gSgQJuOIHljADbDKFaMefiBmtQfbbMv61Vnp9mBpWHQK0UQCawJOIErQKN9oUGBnPiPY2WOuLSf52Hj/QgGtJrVxaEHEBpQcCBYSBMIHl34BgK+4z0opdmbgAQE/QYdmdlPm2j3H+A7CBoqIEUCBKpgW0gSdIA7Jv8AKpMDLtzkvsM9MOs9OeXgaFqsNcfHRQOOBAIPA4nUwLywPcD/2Q=="></img>
                                        </div>
                                    </div>
                                    <div className="position-relative Product_item_color">
                                        <div className="position-absolute Product_item_colors--img">
                                            <img alt="variant" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//AABEIAFAANgMBEQACEQEDEQH/xABwAAACAwEBAQAAAAAAAAAAAAAFBgECAwQABxAAAgIBAwMCBgMAAAAAAAAAAQIAAwQFESETMVESYRQiM0FCgSNSkgEBAQEBAQAAAAAAAAAAAAAAAQIAAwQRAQEAAwEBAAAAAAAAAAAAAAABAhExQSH/2gAMAwEAAhEDEQA/APnjmepxZGBVmKhgzjvtCKSYMXa0fULyx+ih/wBGT2ngnewrCqIgytOiWZmKhgWFjBRBi3kvZm5Hw9R4/NvAkdujwaroSilUUbACUC3q2QwZQvfeRldKh9InZzZGBZMdhAgGoZTsy0U82P2k0iGDhLi1Ad2PLHyYyaHV729KmZi5j0jLzLyeVRQJPbT4fWE6oc7wpgJqGaKVKryx4A8mRaU6dgmoG63m5+/t7SpGt2JmYBWdaFrY+BClz6NSRimwjmxi0MeNTa5nRIPn5aUVliZFqg3TsR7bPi715P018CbGe00cMsM2Mli3qrllFa93YKP3IyMHqKhXUiD7KBLkQ7ci9a0LGNqoXMep9RyOvZv0UPyj+x8yJN3Z4Yuw2E6hQwrMbDspksXduvqlK/ZAWMnuUPhmnRzBXL6lkGpSRSp/kbz7Cc+r4PVolaKqgADgCdGe/czIgzhyn2QyWCdHXqZOTcfPpEMfttbLkMRE6IRi41ePStaDgQk0pqTEvTMgwYC1O7p1OfaRaY10enpYaeW5MrCfE5CxlJbQKkxeiFHPECVdUY2WVUj83nPJUMtKBK1XwJ0nEVpMzeZkbRZBgzmubZTNSWaB19V8isTnPuSvDROiEbwL/9k="></img>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="product_item_name">Leather Gloves</h2>
                                    <p className="product_item_textcolor">Perfect mint green</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                        <div className="d-flex align-items-center product_item_cost">
                                            <span className="product_item_cost_span">$42.00</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-1 ">
                                        <svg className="product_star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> 
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd">

                                            </path>
                                        </svg>
                                        <span className="product_item_review">4.5 (64 reviews)"</span>
                                    </div>
                                </div>
                           </div>
                        </li>
                    </ul>
                </div>

            
        </div>
      
    )
}

  
  export default SaleOffProduct;