import React from 'react'

const Form1 = () => {
    const handleSubmit=(e)=>{
e.preventDefault();
console.log("Form submitted successfully");
    }
  return (
    <div>
<form onSubmit={handleSubmit}>
    <div>
<input type="text" />
<input type="number" />
<input type="email" />
<input type="password" />
<input type="file" />
<input type="checkbox" />

<select name="" id="" placeholder="Choose Country">
    <option value="">Nepal</option>
    <option value="">India</option>
    <option value="">China</option>
    <option value="">America</option>
    <option value="">Nepal</option>
</select>

    </div>

    <div>

        <button>Create</button>
    </div>
</form>

    </div>
  )
}

export default Form1