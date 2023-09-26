#include <stdio.h>

const double PI = 3.14;

int main() {
    float raio, area;
    char resposta;

    do {
        printf("Digite o raio do círculo: ");
        scanf("%f", &raio);

        area = PI * raio * raio;
        printf("A área do círculo é: %.2f\n", area);

        printf("\nDeseja testar outro raio? (s/n): ");
        scanf(" %c", &resposta);
    } while (resposta == 's' || resposta == 'S');

    return 0;
}
