export function toFormData<T extends object>( formValue: T ) {
    const formData = new FormData();
  
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key as keyof object];
      formData.append(key, value);
    }
  
    return formData;
  }