import React from 'react';
import InputField from './formComponents/InputField';
import Checkbox from './formComponents/Checkbox';
import Button from './formComponents/Button';
import Dropdown from './formComponents/Dropdown';
import PhotoUpload from './formComponents/PhotoUpload';

import reverseIcon from '/src/assets/icons/reverse.svg';
import thunderIcon from '/src/assets/icons/thunder.svg';

function NewProduct(props) {
  return (
    <form className="form" method="POST" action={props.postTo}>
      <InputField type="text" label="External Link" />
      <InputField type="text" label="Parent category" placeholder="[Unspecified]" />
      <InputField type="text" label="Display order" value="0" />
      <InputField type="checkbox" label="Published" />
      <InputField type="checkbox" label="Show on Home Page" />
      <div className="border m-2 p-2 row">
        <InputField type="text" label="Name" />
        <InputField type="text" label="Complete Name" />
        <div className="mb-2 form-group">
          <label htmlFor="textarea" class="col-form-label col-sm-2">Top Description</label>
          <textarea className=" p-2 col-form-control col-sm-10" name="textarea" rows="2"></textarea>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <Button type="" name="Show Description" icon={reverseIcon} />
          </div>
        </div>
        <InputField type="text" label="Badge Text" />
      </div>
      <Dropdown label="Badge Style" options={["Secondary", "Primary", "Warning", "Danger", "Success", "Info", "Light", "Dark"]} />
      <PhotoUpload label="Picutre" />
      <hr className="" />
      <Dropdown label="Default view mode" options={["Grid", "List"]} />
      <Dropdown label="Allow customers to select page size" options={["Yes", "No"]} />
      <InputField type="text" label="Page size options (comma separated)" />
      <hr className="" />
      <InputField type="text" label="Alias" />
      <Dropdown label="Category template" options={["Products in Grid or Lines"]}/>
      <Dropdown label="Discounts" options={["Searching..."]}/>
      <Dropdown label="Limited to stores" options={["Smartstore 5 Backend Demo Shop", "Smartstore 5 Backend Demo Shop 2"]}>
        <Button type="" icon={thunderIcon} name="Transfer this store configuration to children" />
      </Dropdown>
      <Dropdown label="Limited to customer roles" options={["Searching..."]}>
        <Button type="" icon={thunderIcon} name="Transfer this ACL configuration to children" />
      </Dropdown>
    </form>
  )
}

export default NewProduct