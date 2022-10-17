const reqPermission= async () => {
    const result= await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
    if(result !== PermissionsAndroid.RESULTS.GRANTED){
      alert("Camera permission is denied")
    }
  }