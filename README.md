# Angular-5-Base-Universal(Node)-and-AOT

This is a Custom Angular Framework ( ng version 5.0 ) powered by Selim Reza 

###The Features of this Frameworks

    1. Ng Basic Components 
    2. Authentication 
    3. SEO 
    4. Open Graph
    5. Routing 
    
    
### Stack we used:

    1. Angular Universal (Node)
    2. Anguler AOT 
    3. NG Serve 
    
### Run on Local PC 

Normally We use `serve` to get the application run into the browser

    $ ng serve -o 
    

### Compile 

In this application we have 2 types of compile processor 
 
 For AOT 
 
    $ sudo ng builg --aot 
    
 For Universal (Node version)
 
    $ sudo npm run build:ssr
    
 Serve for Universal/Node Version
 
    $ sudo npm run serve:ssr
     

### Deploy To Nginx 

 This Application will run on the port `4000`
 
 Step 1 : 
 
 We need `PM2` to run this port available to run application  using the port `4000`
 
    $ sudo npm install pm2@latest -g
    
 And from the root applition run the following command
 
    $ sudo pm2 start /dist/server.js   
    
 At Last We need to add proxy in `nginx config file`  :: at `location / ` add the following line::
 
    proxy_pass http://0.0.0.0:4000;
    

# That's All. Enjoy Universal Angular 
  
    
