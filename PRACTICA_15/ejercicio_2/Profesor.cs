using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class Profesor : Curso
{
    public int AñosExp { get; set; }

    public Profesor(string nombre, string apellido, int dni, string nacimiento, int experiencia)
    {
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.DNI = dni;
        this.Nacimiento = nacimiento;
        this.AñosExp = experiencia;
    }
}

