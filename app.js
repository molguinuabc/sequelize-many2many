const models = require('./models');
const { Op } = require("sequelize");

const consultaPropiedades = async () => {
    r = await models.Propiedad.findAll();
    await r.forEach(p => {
        console.log(p.dataValues);
    });
    models.sequelize.close();
}

const agregaPropietarios = async () => {
    const prop = await models.Propiedad.findByPk(1);
    //console.log(prop.dataValues);
    const per1 = await models.Persona.findByPk(2);
    const per2 = await models.Persona.findByPk(1);
    //console.log(per.dataValues)
    await prop.addPropietarios([per1,per2]);
    const propietarios = await prop.getPropietarios();
    await propietarios.forEach(p => {
        console.log(p.nombre);
        
    });

    const proyectos = await 
        models.Proyecto.findAll(
            { 
               where: {
                    [Op.or]: [
                         { idProyecto: 'PR3' },
                         { nombre: 'Proyecto 2' } 
                    ]
               }
            }
        );
    console.log("Proyectos encontrados:",proyectos.length)
    await per1.addDonandoEn(proyectos);


    models.sequelize.close();
}

agregaPropietarios();