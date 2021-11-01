using System;
/*
 Ejercicios 1
• Crear una clase llamada Libro que almacene la información de cada uno de los
libros en una biblioteca. La clase debe conservar el título del libro, el autor, el
número de copias del libro y el número de copias en préstamo.
• La clase contendrá los siguientes métodos: constructor predeterminado.
Constructor con parámetros.
• Método Prestar que aumenta el atributo correspondiente cada vez que se realiza
un préstamo a partir del libro. No se pueden pedir prestados libros si no hay
copias disponibles para prestar. Devuelve true si la operación se realizó
correctamente y false en caso contrario.
• Método Devolver que disminuye el atributo correspondiente cuando se devuelve
un libro. No se pueden devolver libros que no hayan sido prestados. Devuelve
true si la operación se realizó correctamente y false en caso contrario.
• Nuevo método para mostrar datos de libros.
• Escriba un programa para probar el funcionamiento de la clase Libro.
 
 */
namespace ejerciciosPdf
{
    class Program
    {
        static void Main(string[] args)
        {
            Libro biblioteca = new Libro();
            Console.WriteLine("Estado actual de la biblioteca");
            Console.WriteLine(biblioteca.Mostrar());
            
            Libro biblioteca2 = new Libro("Narnia", "Lewis");

            Console.WriteLine("######## Biblioteca Comunidad it dia 1 ##########");
            Console.Write(biblioteca2.Devolver(5) + "\n");
            Console.Write(biblioteca2.Mostrar());


            Console.WriteLine("######## Biblioteca Comunidad it dia 2 #########");

            Console.Write(biblioteca2.Prestar(1) + "\n");
            Console.Write(biblioteca2.Mostrar());

        }
    }
    class Libro
    {
        private String titulo;

        private String autor;

        private double copias;

        private double prestadas;

        public Libro()
        {
            titulo = "";
            autor = "";
            copias = 10;
            prestadas = 10;
        }
        public Libro(String TituloVar, String AutorVar)
        {
            titulo = TituloVar;
            autor = AutorVar;
            copias = 10;
            prestadas = 10;
        }

        public bool Prestar(double prestado)
        {
            if (prestado > 0 && prestado <= 10)
            {
                prestadas = prestadas + prestado;
                copias = copias - prestado;
                Console.Write($"Se prestan {prestado} libros: ");
                return true;
            }
            else
            {
                Console.Write("Resultado de la operación no realizado: ");
                return false;
            }
        }
        public bool Devolver(double devuelto)
        {
            if (devuelto > 0 && devuelto <= 10)
            {
                prestadas = prestadas - devuelto;
                copias = copias + devuelto;
                Console.Write($"Se devuelven {devuelto} libros: ");
                return true;
            }
            else
            {
                Console.Write("Resultado de la operación no realizado: ");
                return false;
            }
            
        }
        public string Mostrar()
        {
            return "Datos de biblioteca:\n" + "Titulo: " + titulo + "\nAutor: " + autor + "\nNumero de copias: " + copias + "\nPrestados: " + prestadas + "\n";
        }
    }
}

