
      // get the inputs
      const inputs = [].slice.call(document.querySelectorAll('.container .slidercontainer input'));
        
      // listen for changes
      inputs.forEach(input => input.addEventListener('change', handleUpdate));
      
      function handleUpdate(e) {
        const suffix = 's';
        document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix); 
    
        
      }


      