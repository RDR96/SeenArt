import React from "react"
import {Grid, makeStyles, FormControl, Typography} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    textField: {
        borderRadius: "50px 50px 50px 50px"
    },
    root: {
        width: "100%"
    },
    marginTopContainer: {
        marginTop: 20
    },
    labelContainer: {
        padding: theme.spacing(1),
        width: "100%",
        borderRadius: "50px 50px 50px 50px"
    },
    centerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    
    label: {
        marginTop:10,
        marginLeft: 10
    }
})) 

const FormContactFormat = (props) => {
    const classes = useStyles()
    
    return (
        <div className="form-contact-content-form">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl className={classes.root}>
                      <label for="name">
                          <Typography>
                          Nombre
                          </Typography>
                          
                      </label>
                  
                  <input name="name" className="input-container"/>                  
                  </FormControl>                   
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl className={classes.root}>
                <label for="email">
                          <Typography>
                          Correo electrónico
                          </Typography>
                          
                      </label>
                  
                  <input name="email" className="input-container"/>                  
                  </FormControl>  
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <FormControl className={classes.root}>
                <label for="email">
                          <Typography>
                          Asunto
                          </Typography>
                          
                      </label>
                  
                  <input name="email" className="input-container"/>                  
                  </FormControl>  
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <FormControl className={classes.root}>
                <label for="email">
                          <Typography>
                          Mensaje
                          </Typography>                          
                      </label>
                  
                  <textarea rows={4} name="email" className="input-container-text-area"/>                  
                  </FormControl>  
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={[classes.centerContainer, classes.marginTopContainer]}>
                    <button className="input-container-send-button">
                        <Typography color={"textSecondary"}>
                            Enviar
                        </Typography>                        
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormContactFormat