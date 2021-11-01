using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class Curso
{
    public string Nombre { get; set; }
    public int CantMaxAlumnos { get; set; }
    public int DNI { get; set; }
    public string Apellido { get; set; }
    public string Nacimiento { get; set; }

    //public List<Alumno> Alumnos { get; set; } //declaro el atributo y le asigno una lista de tipo alumno

    //public Especialidad Especialidades { get; set; } <-- Asi puedo declarar una sola especialidad

}