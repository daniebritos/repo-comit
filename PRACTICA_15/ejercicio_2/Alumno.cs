using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
public class Alumno : Curso
{
    public bool Trabajando { get; set; }


    public Alumno(string nombre, string apellido, int dni, string nacimiento, bool trabajando)
    {
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.DNI = dni;
        this.Nacimiento = nacimiento;
        this.Trabajando = trabajando;
    }

}