from django.utils.translation import gettext_lazy as _

ERRORS = {
    'email_required': _("Debe ingresar un correo."),
    'password_invalid': _("La contraseña no es válida."),
    'password_unique': _("Las contraseñas no coinciden."),
    'username_taken': _("El nombre de usuario ya está en uso."),
    # Agrega aquí todos los mensajes que necesites
}
