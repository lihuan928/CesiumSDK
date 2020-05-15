/**
 * Created by user on 2020/3/16.
 */

class LineGlow{
    static createLines(geometryInstances,materialOption,PrimitiveType,asynchronous,modelMatrix,classificationType){
        let img = new Image();
        img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7EAAAAzCAYAAABBs48XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABRNAAAUTQGUyo0vAAAAB3RJTUUH5AQOCCYPCSztygAAIABJREFUeNrtfe2uZMlVbGTWOT3TbbtlRgNjEB/XAuTBEkj8g5fgEXgPnoD34BF4CX7yAwnGFjYGNBoN3PGMm57+OOdU5v3RtctZWWtFRFaPfW2mttTqc+pU7dofuTNXRKwVq+C6Xbfrdt2u23W7btftK9p67wCAUgo+/vhj7HY7vP/++wCAm5sb9N7RWkPvHbvdDqWU1f2XUkqfX//ss8/Ke++918f99d7T/Y/HOfxenj17hqdPnwJA/6quCTvH+/v7cnNzg/Gcvvjii/Lq1St85zvf6dtxlVJ6733bUS+lHM8BAF68eFGePHmynXMHcPKlL1++RO8dT548Oflbaw211uOhHs67A6jj5Zp+LtP+S/De8T192j+Sz477n39G8nMLXs++Z953dC7H9w/jp2fHsL1nHk/B8bNjmr9vuy89OJ/xWmZjfPtMm/ZftmOcxsl43zEd83zP+/T/2T2ejqkE14Hd2/BeBK+X6TNlGrfRdd9eq9MxVHJs499qcj7je8fvq8Fxjvusyb7m32tyXCXZP5J9Rs93Ic9NT57tPv0bX2vDuOvJ6/vhtf3wtza9P/tbB9AKrtt1u27X7bpdt+v2C93+4z/+A7/9278NAPjkk0/w+7//+ydB72effYbb21s8ffr0BJisALwM3H366aflvffe6wDwn//5n/i93/s9PDw84PHjx+i94/nz5+XJkydjwHwWhL98+RLvvPMOXr58CQB4/PgxXr58iW984xs9CS57EABlAKgbQKiPgfF+v8dut+skyB5BRh+ASEmAUhYo9wxwJMfayXt777303lFrjUBEI8fUCWhAAGq6OOYUbxv3CQkoC499AjRn59F7R3JN2H0ZQV723dHrdQC+Z8AquCdsjGZArDPw3VorAPpAHIz7qgRcn4DEaX7oAEprrSTXpCTzQydjrBBSoSTHMx939L0MaHUBEiGAbwbqegDmGIgtwd9q8v0lOP4afGdNQK8CnSNgzb7XuaaFXA8kREP03PbhGRr/H8FnT0Bp9m8/gNsWvH8fgN9+BbHX7bpdt+t23X4ltk2hq7WegbcR2H2VAO+gTPRSCv71X/8Vf/AHfwAA+Pd//3f80R/9EXrvePbsWXn69GkHUA7g6bjgv3jxAu+++y5evHhxPJ4nT54cg7lPP/0UH3zwAQjwiILEmrxfKVwKnPUk0C4B8FHBOwviyxBosO93ANqJYlhKmQFpSa4Beu+ltTaC3UwN7OIYOzuuFRBLrgeCIJGC5wnIMMKgB/cnA+mZInfyfYH6x4BOdp+V0q3IhQioHD8zALpZsc2ud5nOk40xdc4p2Nv2e5iTUjJiBviEbMCwL4h7gOlaZMCwi/GSgZ8MSAG5gptdYwbGQAAloFVaCNCLBLwWAzjPoHMEsTNIrsZ+kIDsaN/duG7qfRmBMmcC9Gmeb8PP++m1ngDX7LWe/HwCcq8g9rpdt+t23X5NAJ4D2tz3XfKdI5D84Q9/iNevX+PP/uzPjmmY4wJ3d3dXHj16FAapW9rj3d1df/ToEeYAcgvs/uEf/gF/+Zd/mQUrLB2uMECx3+/Re8fNzU2ogolrmKlPGbiLAnkMAXYPAkMGIqP0xDE4aySgnK9PS4BjjUCBAMkwgnkFftQ1jD5//NtGMJjPwMl5TIAiC6j7CKgngMQUuRCIRc/XAbA0xOmDJypea2/ixQngMLV5VMUKAbFNAEh1r9jfWvbcJPeWnROm8+nwVPVZIVYpu8UY6+M1RnCNmXrYCCDrBpHkgMkOT12FeD8jm7I5ih23SoN1QaxKx43m4Uo+OwJMpfI6YLdMADp7b02uTyVrRAmIzygFuSRrDVNgMREf87M2Kq9R2nCUQrxHnir8MLxnT0BvB7C/gtjrdt2u29cGBAL4KgHembKXBc9R7d1///d/4zd/8zcZMKKpe19++SX+6Z/+CX/xF38BAPjbv/1b/M3f/M1xERrq5zalcfw9CuzmcyoCsPUJQJSDQsmAQBRYAUB5eHgoW73kdF1Z8AXESlkhwTOMAGz+zoZzBl+lMSIIVAuA2lobUwkzJYwBZqXgKUDBPluD4wIZA9E5uqnCgJ9ufDYOkrTMDOQrUOCqsw1e+m923Da4m+cTBZyzbIN53trmo2kMhsdN9pkp8NH70mswq54EZM/joQYgdAaEYcoyuEoZZT7UZDzPmQyNALNsfMIc/ymADup2iyCJCgHQhXy+uCQdAZhIPhOl9IKA2AjEdQFiEXwmA9Ml2VclILgm+6nJMWcpwRVapWXHmZEERZAOLMtgJjVH0LqfXsvSfyNVdR+A2PG1CNQev+MKYq/bdfuabJ988gm+853v/Hx2CxS2rwrgRYHKvO8f/vCH+OM//uMzcLf93nvHv/zLv+D73/9+mEp6d3eHQcUDALx+/RrvvPPOyd9/9KMf4Q//8A9PFsb9fo/WGm5vbxEAvhDgsVqjTQF69eoV3n33XbaIO+CkiOD75DgHUxaWvgYBAMegdTbkKADw8PCAUgpmoPrw8HBUNCeDGAb4iwAzTCVI0yanlLqenGeqDCTXcgZ6VDWciYABlHcWtAaphY66CeNYFGhsBDyXSTFmgJNd3y7ua/j6MBbbAmEBF4Adzm0Eh46SpsBt9pxFc2IIYqPvn84lIxpO7kNrrZRSWJp4ZnwTpahmNboQYCZV5EfwapIkEdHmPh/MLKiDpxgrpZIB3wjoZnWQ7Jp2cvwRYcBIL5ZaXAjBk9W+szTVDFBREHu4zw08jXbcb0WepjwCzIY8vTf7jjoBSwiwPH9+F1yPurCPGdwW8o+RFgrEZs/3/P9YA5uZOO0Rq6+Ryjr+/hC8HoHaK4i9btctA1zPnj3Dzc3NVtv2C/++7Tt+/OMf4+7uDt/73vcyoFn+7d/+rX/3u98FvJqik4lsrqH6wQ9+sH3XrN4dA5/eezmkhiJZ5GdQUw6ghgEWACgDEFUpi8eAM1ioXaVDAo4N4ALY6uiggtINwCYmIyxACc9hqrk8C5YCx0oVVJ2B2cHopkzHHV6z0URnuw8HZaNP58xA39m1GdIhz+rWgvROZVATAbdwXB0UPAwB/onD6HCdxoB7O9caPb8jgI/cYafnqiOv0XLHbwbeocD+EAw1nKf6NiOgqQkZ04Waw1TuSPVuxrNbAvX+LL3z5GGIQRAFvknqOpI0ZFZbhgDc9AQ0h+cmzjdVVgKVs5Bx6SrKXQTLIOekUlWzuSTLVImMrSKwuKI+uqAQ0KpnVi9dElKJXWelkAKxe7NKEc4Mf7JU3k7AaWYi1AVovCTlFwkQnN8XuftCAN+RlKgEcPYAnDLzJWb4FAFpp163Q5s3gXxfNC/OMd9+ArGZoVMLgGufwOoep2rrwwRY5/eegN8riL1uS9vBWAMvXrzAkydPltW7KED4+OOPy83NDT744IM+AbajYvfy5Uv86Z/+6bHeKWOOf/rTn5b33nsPQvWSYE8EksfUzN57efHiRf/GN75x9vC/fv261Fpxe3vbgZ/XAQJvWh08fvw4XcQJuDsL5AfQlTHSjLVlhhBnQekAZo7g7aDESbA37utwflEAWgjQi8w7KvLUVRfopu9trfUR6CTB5wwGyyG1djYLmQPVMtTwHfeTnOdJ8JeoqyrgYC6oZ/Wog5IzHtsMyBoZnyfP/QgSZxBOzqcTIkSBgyyIjUBUVG+bqXjKhAd4k+oYGRBloAjJ9UvNVub9E9XMcaZlbrfZeGQgUN0TOcdG5Au4cj8ClEqAFAKFix7XMBai9N1sPgEBL6r+kp2r+p7MyKkH81cJ5l5ZygBRa0o+p85HtXNh4zW85wn54CiUrilWIcfPgG8GsLP2OarMg2UAgVzX7LNVrKNKgWUANQOsBbyWtiYgV9XFVgLsKgGNNQHmWYubBq6w1ul9wM9V2uy6ObWwADemY+OmgGeZdOg62Bb8P6cR74OfN9DK1Nc9gPsBzJ7UyV5B7NcAdALAj370I9zd3eH73//+EXiOQPGLL77At7/97UsAXlp7N6h3xwdjAC8sHa7c3d0df9nADqY0qU0BGmrxOkyDkfv7e9ze3mJSvXoyGUWMu6N+beBmU3BKkgoFAH0ywgkDmUSF6yJAn6+ZqoNw9n+yMA5pa9k43FxC0VrrE8A73p9Bxd1A5NZL0mqjEADFGrDufVIgzg5XAPFigG+qcAa1bRjqJFm63llwNSkprJYqSrfczr8ETqdnYIaccxagq+A8u6fMGVGpJ2GwHShONQFISt2AUOmQEAowAl5WqylrSoc5qhnfNQP1k16SUZ9R4doKop65admZcpQBYan4DcebzWUy1ds8r2gsO+62HXnmBhIwn31eqXKOCzSrDWaBbvQ8Vniuvgx4pQTWRORUQtAx8OaWLRRFuAgCSJHkCiS36XpWAvbVnDMDKYCn6mevVfg1sMyYaX5fO4A7BWKZAquUxlnJnPu1ziDWqVNVx8HMnlTNqzKaygjRKsgbRe5H/48KK8DrXrM62BGo3uNUfZ3f85CA26sS++uwjS0g5qbaAlzg/v6+HOr++gjeDBaugRfXu4sSZXDv7+/74XiKoVAohWGpTmZSy1KFzWDWT0Dmdq+itgcj+B5TFQeQe5LGS1KiwqAk6Z0YBkJZepwRZK+892QyHtIVQZjqDFSxNDhVp6WCh6yejqkeZSOKArUW4Gl/UQphCUBG1o4hSzVkgUdmupOBljA1LqnrwljDNClXZ4FLUHfLlCrVjkQphZlR0nGBn8BOVJOJgNCaiYCG3JimgKdTOorUSLKcXCvynRYIh66vdefobgTudCwScJSC5YmQymp8EYBa9ty0BJRWom6BfNZJ042eWWYodnauSW2140ZcjHnfIY0U6eAQzrL3r4gL1DhyvivK1ihijmXpm0WQMIwgLQGgLURNYwRKdk9VzXc0ZmoAoCu5TgrkzoA1+7ujvmbpuCNA7gGYZSpopKp2UwG+BOCqY8ACiFXENovhIjOnrB/sDF4jJXZUX/fBz/tJdZ3fv7+C2K8eaJ6Agw0sRsrU3d1dffToUZsVAhJcHP9+MK45mZAObSq2NMbae++jmrXf7/sAbFLji0kFU2DRcTIrOK17a+MkPfXvS2urHh4eCgDc3Nz0yUSmTODvJDCKnBwH4Ho26ZNAMOvHdsJ8Tp8/Udsi5W04RgRq4gh0QjOLATTMC4fq/chqbqLXW6JowWklQJrXd6EyzIH6GcgIjlu5j1LFKKnDnBVeGsxP+xjTSqNzzQBOVKvIQOoSaCcERgn+Bmin2jQAGvZXDeAA6DQoVVd8FoySc1IplWW4j2W8L9N9XQn6Qe6bk/7eHEJxG4fBeArn6oA0G9XqLkBvNwPpjFSUbZEIMIJQUp1nP5qvlDlTN4PD+d6Nc3UEBDJTt9lNFmLOy2pIWbuXTsgvQKeizveygWdW2GTV9PwBcT/lDt1TtkM7tjogVpk/qbY6Wcp21manKEIVWuVXNarZ3zKCoBrHPwMxEGDXJ6U0A8YK0LFU5Oh9GfitQjGOxtHOBOuj8quANOthK7PG4NVlgzz/PZjHolY6mQLbB7V1e+0+UWUfpr8/MCB7BbEBGN22jz76CB9++CFKKfjnf/5n/Mmf/MnxbwcXUpDBAOii/+PnDqC3DMDtCNa24GJMmz38XN7goKPhzQjeRnfJ8feTwT2oSJlqCLJAnLF7RrphGtSNgC4Afan6FxjqsMC7BAoXBtXVrYGLgAyMyQLTdWd9684mpjmdOFDzzgiQYJ/z4tODiXFOTapEkc5AA8ZAejABKsStNlJri1EzmQUvbgpruMAm6ZkZ8MH0902VnBXlOqt34KlcMFSLQsgJ9T2VBOZh+wbDbbhAt7FwWlw4afMqS6IhrokCCeQzEJCmEQagNvscoLNGYNxHCLBSRDCbPbujio6AEGMBfvZMMbXSvS4Ar189A3NBujQ79yZIBohj6uAOoeoYaIwgVEwIUiFLM41AZoNOoXaVShgZAcroi7Voytaxld6oWdzmPJNqfujI6zGjrKGWgMtuPvdOqnJDbkikAD4jvFk6OKt1LQL4ss/Mxk+VKPcZiGXux1kLHeWCnL0GoRo75lNFrI+sbplltUQEVDS/AXENbPRv7Ps6GzaNAHUEtA/i//tRtf3agtiPPvroxJV1u1kPDw/15uZmA5WdDNiO8xo3toBkE8tcs6dSeCMziXKIodBa24BuQdxkflRHyqQkopRSE9UCC4zkWSA4HPPYMgAk6INx/SyzENG6IrtfzVgMz8ZPAHqUUsBUwjNlbwYP01hIU6kO71OqAa25m82HDr8fA44JzJ+4gorUQ+aky9LJIpDtqEJKxVTuoyw9KwqEakJ2MOWZzSEZu94MNcwJpLNrnaXLIgiKQcDwCcAg801H3KydMf9OT8MsUMzSM8cxXI3lJQNJAG9roQi47JltgjxTY42RsKr+lAETBeQbtBGQU1MKA9Q55n7RuTZDycjSjx3gW8Q4dozosme6knuigJcq5WFKsFKHGDHgxB3hcyqAtZueDEN4gAEUAO1nkPWgVsZPilwAuU5M5XWMgNjzXIR4U43vdpRPpcjW6bqyWlIEf+sBGJ4BckPem9YFrJeCWCBOFVYxVg3mNhYLRSB2VmKzdjqjsdOons7pxBFwHV+/D1TZk8/9rwWxQc0oJpWSTQ5Ra4+zCXICBkUwoMWYKGui3tUsGOm9V9LHDSIoh8m0OezpeA6NHUfi2rkFyDVh+6OUyux8wiBJ1IBm7DIQGyg4rQhA7luZalNZgBl9tg9EBAyVzjH0cNSDGaxLh1tDYcgChaxx/HzfGYhji7kLgmhKvZFuSXsxBkBvRQFk6WOY5hS3vtRJcw2fmyEzoIprw8D/JQCe9Ud07rUKrFmgmwXLrCdvEd/fzGdYqWAuAGUgdqW1SjeAYUmIQgZiXSIR8HwTHGDLMgKyuaLBqwmGUMxUOj8rIVCECRKgY5F6ZGxlfWTdjBKVxgr45Q0sHqpizVRronLnZfOCIjCUO7PTxmy1zyuLGd0UcBjfW6BrcLM1Qim6BbqtT9ZuZ07lZQA5Gws1Gb91YR9RrAn4rYhccsbJaonAawtALFNk98n/D0R1nRVZ9u/XO5340LKhb/0KxWSSBaUnA2EGOYO6qtLhnCbalOkaAHFXjFYAXty0j3DinGu9DFbYrYeqIqgDfEOnLFWMpVCusPgrE7dSh0ECNcXmK1UsCxjdvqGqRo+BvnqYOFzDHUdtPo6VpCaPgSlAt5ZZaYFQoGu1unjmMYF5VynrYvGPjt+t22pk8eyG6lZIMO4snp0EJUppXwHYzvOkzukSRQwL36GCfZVqqMADm9OiwL+Z94+pQatqaTfnqRVDNrXOIACg2djsxj1U8y6IYhilzSoipxMCQLktK6DTBXBn91tlfTQSD2VrxahMqvkuIvzZ8TjGXA06pZbFQqzmuV8IiF2S1p2jS6L4QYDl1WN2ert2AkoBXU+arSsV2sU3UmQbdK0sa4OjFNhKgGUhSjA7DxU3wCDGomc8ArGusdPYGzZTYR8SwKpA7PHvN78OYDW74Uc5Sjudnb0eqDizqFXHOlODXerGAM4aN88KYQqqZvMgoU7QIHv73ACeHaeyYoACGMozoGtpqSqQtaqBTmViE/wKIIahUju1xA08TRWCZQV0aw4WFDZ4LRfcVDmYisvJdyc9Nd2A11EKIBhgp75SgTQE5+OACRiL0duCBZXO6ABYJwVVzRUq6FGLswoiWd2jIjUzF9dKxoNStZ1AP1LPu0EqdnDDJDYHX5oqrM7dUcQU0AA8kx4IMA9yT1fOSRGHKv0bBghtRIlsi4SdUsndMaTINwXs1TzjrCfOtWVrMcj4c1KXYSinENfMeRaYasZAbBYDZucemYnBiN+UwRe7phWxcRPIuHDAY1kExNHxzIC1TepsBvaj40CCATqJ7ZkApJTzuXzAyYq4BMSOBk89AK7j75vY0YPruhdkaE9e2/ZbcZoiXn+pIHY0TRoB49BjVKVYZYCwBpNrZQ9AkAbs2lezNIcOnePOGBymeM7ALQqqKnLDA0e57YYyBehUSfXwnAUOQTpwMxRJxeI7rztK24qJDKBrsgpRJh1WjQXJzmKoWH4VMLiuxkiCn1XVVtYtIk/rY2YWqm1CgV9XWuAbwbgAQDUvB3yTHef+VON+uP1eXXOSlWfNcTzNwKFymnVAPntuHYOu7OdmzMsr91ypNp2of9G8z8ZHdp2aGHMqKF8du8qshKmORfwN5pjPrqMiDp1UZ5c4YNe+i3mWkaWO4ZYCsdUgCFoSoDvXA8Z1B7QRDiNcol6jLQFnSI5fAeAs5mrwsrCUcVcX8bW6v6vOzkgAoqO6djMWZ27JUbYDi8tV+vOlbYNYGraruDrXaSXmmMFiRHIi+VuWRtxxmrU3Z/E18/p15K19Nhfo/pWD2BGoskBoSAGOHLyU7XQlrMS8L5aTXg22R1lqQwxMJ6df1egq1zh23AqEuiCFnbMCJSrlZLWWBoZKAXMRUk63DmBSaXowmFMWCLOJkdXeFWNCc1pcKOVS1R0Cfkqzkwq7UntUgkC8wUtVxVuQG7QHrhG0Z4TTWHPOwDsDxY6qwYgQVZM1k3PNIMEgxhG7zvOC6bZbYQrYShZEtu8G3YZk/H7XgEuRap2QMSylnKXv9kSBUCZSl/T1zoKnGlwrBihhKA5sPmJ19Mr3gAGXbqqA2XPptFhi11WBvFUyGIizbRTYz8ZKF7FAtnapDCIY630XAXUl8c9M9jgANVuXYMQpEPNjFvex+Y7NQcrUs8KryS0CQCtFcxZt3FgcZN0s5Fo7ohYIcGXn4IDglTZJqgcykGcHdUJK4bDGjs/6aA411rxGZl37aa3O1qA2fW8bAOuo9O62918EYglQdWy0VX+mXcJ2RU5ixXy9EhALaLtrBL8ztoaxOtlxRG5nMB4S9rAXEbyVYOJUqQdVKAAOoHQs4xUg7tB9arOAWTmrsiC6EeYbRMEDfDMWBiRV7ZZK+YYRlDECYmWhUwpFMRZJGOcXPTtKbXYBsps6nQFOF8R2EbS46c0N2mHWCbYRKCdOiioMBh+EuASMOn7jXhYBCroR1DnPsRv0g4CzGZhVcOdINj+qsaZIGVyo4Ll1qkxBc0kdpUZG9aNZaxO2LjR4baAc8O+mfLvAiqVFq7pgdV8cZ33VKma13Q0Qtzpa7QcMc85kKnEkpChTI5jEhEOoO2nhThpvFyRogW/05xj7YQE0MnK0JnNulBKsAKtasxhwjI6RCUoOgAUhBJ1ro4weO3SbKyBOGc6y+iICNZvDojKIbO3bDc/7Due9ZsuEjcqA545g90aB1a3HIzznsIq8x1INgOWstkbv6cl7d4niygBuxVp+faQCs0B1/D0a1FUMUMBLpXbUElYPIVvFgPfkUuYEWW1TBVeGuwF+3EU1WtirYKvVIswChHkx72JSd8BnNyZYFUSzlFfFcDsBgarzVCDfUWAvVZoZ++zUK6sxpUC7SpPuBsiAobQ4KbDKgMhReFbrUVWwUxcUWEC3hVKBsksMuAY+MACHqzBl2Si4AGCo+U3N+5ka6vTvzc4zarPRku9gSoMCUtH5tYAgcACzA9q7ASq6+RrgpehHx9uMOQlkfDtkm6suQjwjTgpyNp+xMeoqit0Abkq9csoZnHNUJDHzKpnnUPU8Z+tRRZ6N8bYg1jkelu3oZBM5pkdq7crEp05ArOPOHIllneAoJUqtZOyo9aiJZ7wFc1yfhJwxlXg3KLJ1Uk7r8PqGkR6C9XHe14wVz/7dAMA//uM/4s///M+32tSTWtODcdIMAgsBjSUAnaPCWoL97ZL3Zd9Tyetl4V80eCtRIVgBfLRIR2xRBKiA2GHPZZQyFqgZk4LrUMsmYaWWdsGSraSgRpO9cix1HBG7seAVEsSoYvko8IucC1UdWTYOGrRTNhDXI6iauhWzFlZb5gRxIM+FSqdy1H1WL+SkbLoEh9tnUZ2/26ZBqThV7HuFKIhIPFZf7JgDlQRkFOj6T3asDPQ5c47TdqoZBEQLzsOdlyKwUqFNnbJ5Sqk5SoV1zVy6+FxL5hGmgDZox2AY55BdnwqeacNSvLNAs5mAQhG5JSGR3XpcVSuryB239REW5/q2MH6iGADg3gRu5oHT4sdVY51e5UgIPYdIdVvxuNkMTvkZy2KYx3qF7u/u1pYC527DIODWaZG30gITpsrrqMAsTdltraNSxh1CR8VUPVFuW/LanFY818k+4LS9zv3h3x3Oa+Jn8Dv+201rYL3pvW/9/EYAuUvQb/R7SUDuTgDYXYKue/B92fdUoqLuoOtZXWCrVNkskGaLVgZunfYdyvGTqXLOAq9YfogHXqXDMic1p3YL4HUwDX5LjYzFhsl8ImH+MzbWCeYdsHNJG6C5qL4l474ZBEM11AylbmR1TSwtFMl4ihjTBj81NRpjVQT2rhFStnBE47svPFvRsWc1hK5iU6BT7UvyPYqNVgYsWc0TC7wuSWF3AnY29yhVl4EGptypuiWQwBjgKYmKpFD1hw4Z4yi7zrVwDGx6MOerY3b7wjq9pJ00XAQqcPbMwiAvHYf4S0FsT4guGKqoAxKzNG8nM6JDp55nf3N7oCtyrQmFUsUvQK6Iw1A5nfRoRXw72QJIxBSVreL6FcAEolk8rRRc5XhfhbjjOB1nx6pa8nR4PWPZuVVol35XqYVxnE7ZwvxvHyirI5gdAewLAF8e/i/JZ0ZA2yasWG4AfOsA+G6Gf7sB9e4mUHkzgcrdBBwztbZO+y0JOI6A8o7skwFaZgClmhArZqdODBGmB0X1cqpiMCOYSJzem6rZsbNoRkGBYoRXeqmpY2U9DdUi4DC886LUxeQHETjOi00L2CWlFkKoc+7iyBa8ZjCUGeOasZGdkBHFvE9uoO62C1H9f5VDabbgOXVeTqAVBdYVcXpldk49IIU6uIFV9PpKfSsL3pAckwLqLGir0EZxDIA0g5Bg5ENLglinH24DT5kHcufSJu69AkBBZqAwAAAgAElEQVQzydLNe9wEGKoXgk9MwawC+MUAYR28BUgn381Al0MkduOesrHUgzVNrQ11AptM/c/IxW4oL47nBFNlAV3DG937GqyVbO1ruMwfQh3fCvkc3ZtLevMywNTF/ZlBojKorIjT+7uIxVbSmCt4zaSjWlbkJk4KRCIhWpUpVATcmfiVnU8VYhgmHMLcnGfBR9XSut4zEQ6JrpPbUaMHpN2s1m7veX0AsK8BPAfwMwCfH/6fgewe56ZOJ4D2BsD/AfAIwO3w/whmd5NCuwsA6XYhbqcLc0M+Fym383siQ6cRnM6AuCeqbKS47sgNqgawZA9QJcE/e3g7UTHUVszgnpmg9CCgXlVcs+NV6TQsfYcFbXN6rmOe4CifNQHynTzoSICu2loyxjq8VI9i7ps1fI9ArjKgaAZoi+5lN+99SYK8iJ1u4A6DjHTJFMNiPAdRoK1URgbgO2K1X6VRA7x+i5EuTG2rxjFkzK9S2rsxpzQy5873nREFMEm3zHDJ7anqpGNGBjYQREEzQH9EogG6RVN0L5sB4FjtZdRjsASkQBXrFOCl5ndCmMCcQ3vwGVULuEIQs7VMzW+dAFtGymZgrCWgMFtTmjGeWBYS8xXoAjA2eB0BVloPNSMwbwKERedaBSmsiDcIAmKFjKrgxlBVqHPKiFHFoKqeVQE4QHcOAHi7yix7cjZTbfAzNkFif5i/Q4hYyigW0H2XKxk/bsnTiq9HNk5ncv0ObxTZO7xRYf8HwFMAn05k1lgbm96bGwDfBfDuAcC+c/h5dwCktzhVaW8HgBmptjNoHcHoDufpvrPCu53A9tmIHZmVWODcsaoSdiWr6wJ5fxfBcSFBdGSdXkkQuROqljPgumD4VHDMAquVPp8MFDuNydlCGDGhDbntexcTbsZsKyAHnNd2ZWRBh+5rmE1AMFRAVZ/rmktFyp0TMDr3VYE15367ygwDfk7Q1Qi4VUoEI4IUsIgIlCbUS6YUgahpDvhd6VHpmshEx6ncolnqtHONo7/vFp7L7NhVHXx0b1gNcROBPBI1xAEaXYAdp20YxDwNsr8iwCNTWatJDkTkpqOAZYpU9h6n7AbkHinSopC1l5EcylG7E5IChCRRqfkuqQQx5xZo8yaVHq7mfnVsPVHyVFYZm6sUcesaWyoxo5vrnSJO5vtZCXHFMoFKsr4x1TSLES4xR83AYEQgsRZ5lTyziqzN3seIBrf/q+OyDTKHOWntEM+vWqPH99zi5yrrEwDfPODOTQTdH0DuAxIzpxE73iBvalsGYDqqtAXnKu0Gem+m30eHqdth3zc4L9Yda3GB05raqNZ1VlQZi8JaRTgtbBzmI3sglMLB0gLd/qRqwnZ7yWEh0HBcCKOJuZLAH9DGF857leqljK6UysQCIpVuAQGqulAL3JodV4FihlDduMcq+HUNNWAy5Mpwip1DVF/ToNsasAm8wCdfHAazGIF0Vsua1d02Y5FxiIEOXqOkDFy6CJ4A7bapDJxYYKVqwVjdHvucmkcz4FQJ+AS4yr/i4q7KA1ZAfwHPllAusgiIC2d+Ya0jmiCdO7xMCAbQG3Ln6C6Ut75wb5TDqDPu1HlB3JNszlCt5WCMSSQqjeMK3AyVk6X4OjERm0PcTJdL45tOSHW3mwCLg5zWeA75pIC5a96pOm0oN3rHyC8SB/bgBpCrIG6l1zISctwBlGyMNZx333BKntS66swpbK7aB6Jd5Ie07W+PN2nGLw//3yP2ZTpRYn+MNwrsowO4fITTtOLbCZSO4LZOwPVm+n8EpjNo3Q3gdjyp3XSgNwnYHd/fERtOzTW648CJWvPMbsoR6w3ELsQ7ojRUAnCrMQm4QTOg6/NY38YoHc0J4FTglynWEOyZE3yyBy1iqCLFjPUNVCk3MBbflfPIAvpCrilwnsbUzQW1CqDv9Nl0TDYYGGHP1fy9O3j1rx06Za9OJJjb4xNCDVgJNFYDvz4RfGwB2vZzI4JGNXYVWQcjWHLBk1LIsvltZy7+LBh020s5ZAam+bQSUL8LVEBmwOOci1s/WxZAs+oj67bZcdwyM/UN0G2IFJm7Mk8BvKwAxvlAXDs3/dx9FlxCWGUrOce7Gvy+7eYY8hXwdPRuEG7uuuYAc7UWs/myGM9vT1RA9h1F3Bu1RjSDPC7m+Ae8lFRFjLpZIcXc/0rZVvZMRfeqJuSbGxdHsWkV73fmCuf9EIRflC2kDAVvDhj0W3iTYvwcb1KMXxyALD2mGwA/GQBsHcDrDDZvAhBapp/n1OERwN4kYPZmQtizqdQOsdFTDUDsDrHCO5s8ZSZSkfo717pWAnajG1YToNzJd5VkfwBXkVWqRQbOkICHLHefBRVVAIEaPIgQALaQST1SMzJg38VDN7NaK45vTq0WM0lxe9ApJtOpUYjadQBrLsfzuc01btniEQVLFWu1i6oXZzbmZ1UlIy+aYNfdVFKlrCnm2WlNA/Aa9CgAqmKsMEMMLCxsLCBxFL+IRYcIHAFumKHmmNWUUQcQ1oVAoBvH7b5WFvYd7a8Sgs1h+KO1RDl0O9fkEofpLAuIPUNIxpOar7N09y7IiWJeT2CtXtgNukf1xOlfyVo6FeMZhUFsXKpMdeTeJsxJvSf33ckOc/smZ6ndjhv5WKpUwbMVIrLbnbfV/azi/jtEJSNcsvKB1W4Zq3OpE/coEhpGLBrF61h8XtW86ey7LJ5nWRw/1ZyTb/AmpfgJ3tTHfvMAbL9E3PHlRIl9jlN1M1I703zk5HemwkatfHYDIz06IM+uxOOkdIPzdjusj+1umqxZ31ngXK2twcRYAgDL9hPtKwLYWQF8TQBuBDCjfSJhK6MC+EpAZA/OCcFiCHKsil3KPstAsdNXC+Cp5yygYO7MnZAELHVRufR1xO2Y2PVm4KOS41ULxlynWwXYBDn/agRcLNVGmT04bHIGNHoyEXf4is/qAliSAMTtbQj4Kf4N2uBlv6D0IAk8usGKZ9eoiWDPacPh3DOW+uq4WIMcx0oWgqvWO0qt6hXNxq+b5qeMXpRi4gTqjNBzwSs7HpW+5zruu9fbVZFgzBWqvZerfBYy360QHc486LQUccarO9c7IJx5aLjKVCQKFEHkFON6sxplJjqUC559h4Tq5rhYAZvZs1TNc1NkcHmLY1i9Rivg7qv8nl/VbaUTwOax9A6Axwcw+wjnXkpnZM9NKeVogdx7hwBJu+Chi4DmDOhmhZMB5CgNOAKUdXqYmYoaAcWOXAUtBpDLgGMlLG72XfNxz6CigiuSkbpSDXa7TGC6B2ClEjDdjQVtPqciFsySgEE2uRaiFkTW7EyFjoBdZgiGiRXNFo3IeCq6JsUA3ex7MjBcBViNxlQlrBpIYKeauUckQqbsKxv9zCK/wnPZq0SpAfLe0Q6jWQ0grRwZR9WgJqpJpsBk10i1w4nct8sCMHfc1gFt4DTPYy0hHABeIsEAIvM3cMmBVZA0gnTXL4CRThHwayJYd1Sj6BwiUK/qX5lLMauHjUgQN1W1C7DTk2vOXOaZWu8QJ47hndOXXRmtjcfVxXM/77uZgKcbJAugSwwc4sa5Dq7ZJBtLzvvVMTlO9hGxV+H7MGS9W9lz7RB/CvAxp3HV4s4lRC4BkpeAx+v2qwVy53G6mQrfGKRnuTnZYynjQ7O/u7vD7e3t+MGHIFiNeq8W8rcI4GYguJi/F3AVNlJSZxCeAfdI/o+AYgZYEQRfDCgB2nabAZYVplIF0z0BokiATifAtTsDEl7aWVZX3AVwggjyGUmggu8MBKugsBqBfhH3XCmSrHejAmwZoaBalBRxfqxGWSnENSGJMpCbkRZZrW8VikM2dkpCOhXjHNy6mEr2GWVVVCNwKAFJlX2mivGunB5LolxEhFkxgXVGpnTwpvaOIpwFvJ0EiywIVG6UJXmvUnZUABwdB5ArUKwG1W2v4RAfRYDhIq5lRoAgIeTm42rw+r5WaDVeBeIu8I8AaAt+BgGM81zTTODL2rAhIcCUsV90zxxwz8pFMsIJglhwFOq3yepw9o1gXlupc47Ac2SABZOAwsI1UTXRgC63UT3X3WvumIa5YPq6/fI3Vd4XkTZnY/aGfcOjR4+cBxu9dwWiWN3nDGQjoJq11sk+WwSIjdJyR8W4J9+fBR2RosqYhgxEVQFiGQBTxd1OLZRK13TTtVTai2LLV1i1YuyXKQQs1dqpCWXBIMCNGZgFO8CVzYxsUNdZjaEO3RONLUgQ91yB6yyQZ7U5qp6IkQbZ+Klm8D0fgyIFFHGxQuxkgIwZQGTp6DDGYAFXp7N5HwkJmB3H/HxWQrxl82l2/k6z+GKMkeyzFbouPrt+LVFa2LXr4CUejm/ASr0YoFXB0bikiu9RBFwEQCIwVINAupL9VTPYLSLwRgKYVf2s6lKQHatTqgFjTelkvl6pdVZrCPMoUOUeEGRxN9dKRTar8QZy/aP1spF7mdXnumC4i9dasm5mz+tX4WrdwUurMpfvjKBQmQ4gYDlT6rsA9auZNG77pit41gTRVoffh58fhtfounTzVRzVISUZBOTWw0Exdr4mC3xFnnYLxD1jWWpwTQBjBHR7cBzZsXfy+xzc1EQFyYAuRKDo9spygxQYgQWrxSnQ9VLO+1YAMwSLGaVLqpQiBnLZxNYXFu1M7esEADH1xGk4riZf124eYpw6qYZFsMZFBDEFOg1bnYdbRxWluXYT8Dvj3BmbzAiliDGkxoPKRmAqjTKZy1jW6HpmBEV23+dzrTg3NXHuBSMCXWM4Fvw6JlBODbkLuuf3NDIWOiFAEJASqv5dEXCZn0En83o3CbWVMoBornRrQhmZEJXmFHGtM/UB8DOAsudVXceITFkZ44xkhLkmqZKHQn53+lFn5ltRVoZT6+sYWnXxWbfjAiNUsvV2/pxqp1fgZbE4ZosPyFsxNeRmjm7KOev5DDI+uwGqFJEwH5tzjGMGRZaF9nUEun0Cr/cAXh3+3R/GUUSSHK/9zS/jKEspLRoYUw0uwNVI1du1CqVApTuz93bxfgV4o/1UQ+HIWvWwNODsQXBT01gAOy/UjnEFq98rZMGGYJyzHmquqYQDWHsSFK8AVdelshiLUV1glhX54IJ4ZTJUyILv9OKrC8w7FkgSwHf8ZIDYBbpFBCgqYFFMMHPQLIIJruBKc5Zx4ZqlOCTaigtiNBeqa+sct+sYGgW5rL6SBSWqR3DktM5IHSBX8xQRBEGKuPNFFMxmpSaqTjvLWKnQxmbOM5OlxXaxNjrPGwxg6QBRBZ474rS67DlR6wUDciDxl2o7tv1tB69ef4UwWCHKMif2Kshvlq3hZPFAnHOBZ6LozKOKmKiLJPSlx8VKipy1sxrr3aVOw8p93iHNKyEjFFmR9aheUd8vqSVn2R+qJZbqHKDWJcBXn49+TAcAe4c3bsT/c/j/7vC3NryvTdf2lwNiCbhFPyDZ4aQaedDYpOGYMAG81lV9ntV2MVDruuIytTd6YKtgPN0if0fJuhQMrdTgwhz87rGoFkIqgF4N4lUdDZsgmdrDxkEXJIXTEqiKIB6E8XYWIZBgXp2bAqKZwZj7WQeQu2NMAWjVZzhzaK3i+6LxpAgnGMRQMQNRp/UUI3EK/Pr8IogmJzMFZsDFTFVmFr+Y41wFHSBgmY0ldm0gQEvWEgbg/ZEV4QTo3sLVuE7qWsCY27NaV/UcKHC7kt3B6pEZ4L9kTVQlGkptUo7tAK+fdw1+MmDJ5hk2phwiq8HLJJnj0R2Zt1kP1yrOI8oYcecy5l+hwGo01iryjArVOjHyhmGxaSb4RCUg0b4ZLtiRY4zWqJqsp0zFLwbZrNZfJHMbDKCZrQPMXK0bzzT7Ocs+YWUrrC/7ljr8+gBcnwH44gBkXwegdf78/18QuwHZedvv9/3ly5d49eoV3n///SPQvb+/x+3tbfniiy/w7W9/G8jTSopgKrMaV6VGFOg6MNafMDN7UoY60YM7v+46x7oLiUMcOGoUCzhhAgwQFYkFRj25bgBXDxnAc9uYKGMWBhoyxl0xoStKl3MvccF9Wkk3diZ1dc5ZPVc1guuKPO1ZBUUuKM4WoCoAHFNb+8LzBkKWVPCUw2qw7jCIN3dOyOYvxcRH55KpET2Yi1UaXiH3ze2l7LRfWkkxU2l47NnLgHcn11Y5zap094ysY0FfBrK7AHqOQVQnczYI0M2Um3LBOHPVSlXvpwjIyOGb7cdJcVXEqzJ+7OB1rqtjB2J+VOugWmc6vLpwJgwwwtnJzFgltldKZjJSXZVhOCnhVQhJ7HWVAVkSwqAGcXkkPM2dRRiILtBmm6wcxWmDtJJluTI+uyArkADTaB7aJyJHm36OxIQ2/P0Bb9TW1wfw+n8BfArgMwAv8CadeFRhR+UWvzIgNtp2ux0DuseL9vHHH/ff+Z3fOXtoX716hXfffReEWXFbk0AEkuWCAK6SgXsyifTey+HcVfuZngDoKIg9fq73vtUzR6xrIUyiUm5UfUkRk38nQSQEaOvQKbsOcHNUORd4O+k0ilFXivAKe++2F1hZGCHYXYBnBHyVoLtCt4VR49qpPVQproBXo+zUvl5y7VfHNVM/sjGQGey4vfjG8VHFcWYkmKoPXs2ogEF8gAAHVmvLMhuYWsZSkyNwDQMwsjkza5uxOtdAzOWrcymbIytyExfWmultWjG56dcRkK3wyxYc0KfAreO63OGZIDngWZ2j6qPMTK9YOvzb9ADu5vPDSLVywRhWteVOdwcQAkF9dyGEoIpVFcGrTFFnwsfJXow6D1TEnUTYe7JWm0DcGjNq6ZkJXZWIVQBv96nAb9aeUfkEqN/74rqp5oqZmNzMmjb19RWA5wB+egCw/wXgZ4fX9zh3j+/zv69VIfHBRfl40V+8eFGePHmyUseWLchVsFUOe1UOxziDdsXQwJzYVLseV1nF4veoxX2FFQ3rEw5gnxk/sAAY8OpBLgHFjHkuF15LxxBlZcFdDeijIMVhuTMAq+oyLgFalShOlwAZNrGrAMZJOXQY9b4wH7hp1I4Rj6N0u3OJQw4UcfydqFtVjBX3WVEqjpv+vhKQdqyTbM6c7vQLdVqrZFkh3Xy2leqtiLzV66XusQJsSu1wDHvmQBnQbYyyfSnX3iKICSTgdwXMu4SN67DvEqjsOWCO0E76fuQ3wrLyujknMQJTkZrdGLcsTlNti4pYy1nPbtViayULRznfs7jI8cqJVFdApwqrlptAXr6SdSnJ6rcr+b5snwy0M0KfpWgDueCnzPwA3o5rHDOb6/A9fp5C/LMDiP0MwOcHUPvq8PeHw3vvh5/H1/a/kkrsL2oLXJQ7APzsZz/rT58+jRZ4PH/+HO+88w5ub2+zh22um1DOgCBMyniMbmquMqKRjnqD4usE6Qp4OUBIst0DmA8DsPGYh2N3HBlX0/Nc8Oe0vugC2MEAp4xBXQEvThCPIFigJjDDfSsE/KjAYhXAuvelEzbZqdNWdeTKIdNJkWUGQOp+KmMy554741Cpk64ywXpwFzLmVN0RW6RdYOi6oSIBVw7g7Avj37kWICB2Dt66+fyM+2nIHV5VmmPWhzRKFY5ICvaMuaC+CxDkglwXxDIQXw0wCkK6KmIiW8uizzV4acDq/N9mDVYmeC44VunJWW9T5uwO8JR2lZbJTCgdUzdGAGJh/lLPUTX26/o7sNdXW5sxwJmRDY43yopvjVMG5JQyRu3eCtlvNvdU6DrpnoBmRTBHY5URJx1xj2DgtHXOZuC0mThtIPZ/DsD1OYCXOHUlbsG/UaFt195FF2y992OwvoHOTQ08qL0FXl2FUqz6COo2wDaptQVAaa2NYH1MEy4A0FpDrRVqcpr27bq/ArqWtCcPaEsWCwbEMwXX6dHXBeuq2GVl7MOAhxvgqtoZNwB1FkXAS+1lgapKcwP5uQtGGfCciJ2x6QDgTgBVEWOoGse9am7WzGPP6kJd1l2B9wJt1pCxx91YLOvC9XGdqd0e0Cxzw+n9y4J9LIxXl7RwSKEsAOtYdy52HI+Vw+7qXNWhU3e7+V3MC6Gb8+WK6zugU18dMydmqOPWsDrp3t0Yl9UAf259eGZAN5MsysjMIdkB3XYmA0IQ8z3MYy4C2CqC2G13BxPsZqC+CsGD1egWcR6qK4VbZ1ugU2qdWEu53LOsIKemGAKIYopbI8BeoR3XHXLH9WCI5sWePKuzeDeC1R4A0P0APjcl9TV+nlL8+gBsR9X1DufK6/0EhB+uIPYXC3aPoHMEoDivR4UAKmW/3wM4rxfGWircrHCyQJu5uTHw5rQf6PCckxXLXBcYX1obNtUfO8qtAyiP9ztQldV9dNPD3ZTHVeDr1IE5tVIrKXDqnkOw/y6AhxE0KVDvEFEOWFKpp9l9XQEfKz2dM9OVyNCoGowuBOvOxmtWx8hSoZSTJsxgRilDDqnAVAQFZN8GxKrSjRWwvHKMypRGtSICeS4UmFUEywxgM0XXBeCZasJaVKwY8zlAzsn+ytbzTojfS8YA63Hs+GYwwMtUdEY4s+sTZQEAnjGUm7HCCEkVr1VzzXVrax1zMNX7PCPGsmdMlVYwoArEta8qtdhtscgUWQVio3vGsnSisaA6mGSZn8Dl2YEAT4mPVNWoldDY6gbQiukIYrdU4jaA0rvh9RHEPkw/3w0g9vj3r1U68S97C9Jdj22FDmpp1GLobHv+/Hn55je/uf0MADj8rhwMa3BMR2UWwKbOZsxgM5lbhyFenVghggFmQuKmeB1/H/KpVe9ZBoLP3j8p5ooZPSNAos8ENcAzcC6R6/fCYsfSbt2+jxAgz1FOmBs1oGvKXLXKAd9O6qQiKQoJHgE/rSwLjByQDHJtWMuTaoynIgCto3Kr/UIEQaxGswgwqeriVwNbFiiyZ5E5ZzNADxMIun21HeAGgwArSQDvZGywtFL22mrf7Gx+6yaRwYCRsw9GOKwaDGYkCgTAcOYzlv7tOqBCEA1dPK9OxoMq02B9sldNuyp0N4FVAhrGOa7+zekZ6szProtuN9cFgLeTi4yXnM8DXs3t/B7WEiiajyt0dtBKB5Xsu530cVUXrWrn+xT39wAHRP1aI+A6K7Ab+NxPQHT7efzc9vrYiqdP399wTSf+9d4eHh6w2+1OwE6k+gqWGc+fP8ft7S0ePXqEh4cH3N7eggUFrbWygXADmI4PYzMCdcBrM+Gwz4A2EQIO6dgT2RCeE1GyWSDMlMpjXfJ272qtPQK12/9TWrhinN1+Zk4LEBjEg2sopVSKDMSqWrCVmmdAt8JxnVjH/oMRUK/JazSIGrI5QpIEfq1xFSAvC3yVM/JKqrbbl5Z9j+Mw7yzqzuKv2h+5LbJUz8QMfECMRxUUR/uIUkNdkOqUSgBrZmIZuVgMBYsRgU6aqep5e8kc59TbqmvkEMdK8QS0wrhq9gdz7mHpkIwId2uk2b1WWTrZvO5mcABvZ6p3yRjIMoYyoqIk644DgrIe6yr9NrsXivDNWtJUA8xl8QzrAVyDOYA5DDNSsCYkO/t5R9Zm14U4m8tUNw8g9yYAAuff6XnsBMR2A8Q+TD8/TGB2NnF6CP529voVxF43exsCaQQAqwDov/Ebv4HPP//8GIBvgNqczB0gmi3Cq0YTSlnpbwGQVbDXE1Cyeg0Uyx+BLLVQn93b4P6t9MBki3NPVOWs1YhSs9m9dVOUM6D3tkGoE2Q7qetOrYtDQLiGbY6ZCAN0Tk2wy/S7Ae3bOvsiCAZUixwGItwWTNmYd9KiVVmB0+Zkpf6+LMzpytm7L4JHZdaDhfHdgvvLFIwCnZ3yVYHEaC506oLZdYmu7yXXriOv11dkl3oOHVJCEd0s2+RSwhPwUksVIM7W9ApfvXU7ElRot29n7l5RT5E8D/M5V+g03Mjkib0/Mz1SDsAOoFQ1ug5gV98577cZx8wMDJmjMMv+aAmAHXu2jj1fRxDbEacRz2A2A7EzUN0jTjHeX0HsdfsqAW6oCG9baw1ffvklnj17ht1uh8ePH+Pu7g6/9Vu/hRnsJr+fgdhJbR5/d4KsVfDczd/PFo9N5R0UXJX+Buj65CwIUQpLBuwpYA7MxNR1U8YsHbqXbId2As36HRYCwtN9DLXqUWBLA9PJ8E0BUBbYuUSBU0cIcBt8aRB1MKs7PpNDnXeD7gGsjJpChSnJeFAk1UUgdky/n7wKMuMVpn53ooy4oJvVVlbxDLB5rgiCjhnNvA1Zk42FbKxWQdCtfDcDcjJDJ5iDlX8EBLnmPCeu23IzgmenFtVpv5LV1gG5A7oaL+ozDgBX6xsEQbpCzjiOtyvPiQv62Dk69fYrBmrKFdcBbUWcT0VeqhIBuroAIBX4rMH4KwIkX/I9CtRnoHqlbriT/UIQVdlalSmwM2gFYgOnFoDZhwnQjr8/GP/2Cci9gtjrdt1WQPoFGzVMuru7w7Nnz/D+++8DvPY3U3nDAPTVq1fl3XffPZm09vt9aa1traIqCYKQAc39fl92u10Zna4DN2tAK6CR4sSul6p7ZW7Tav8M3CpjmUtU3tEpXLm/0iB8AF9Ov2VZrzUBxxX3wwiAONfTUURV32YgrynOUjvrtBhfosyuuNRmgYPqhx1dxwptHqQMeCCIq6z3OQNEHV6PXxVYQ4DQAs8N3el1WgTQdOePlQwKleHBgNGKu70CQm7v3tUUbeXqDWh3ZpVpxb6rkvmPqYIsNVrVLar5WpXqKIMwEOCsQO1qdk+FXyu7Wp8atVPLerHOSmXkZlyRG+dV5D1PGehUILaSdcbp31oI8CwClDr1sdUgv11X4jnuaeCq7B7nrXQ6zutiZzA7Kqv3E3C9x3kN7RXEXrfr9qsIkmfFMFMRo7TuTS2L0r2T7zvZx6i2kaCz/d3f/R3++q//GkaQCnipzmNaH1N/6OeFC7QLrp0g8iwA2O/3qLWCOFCf1JMPNc+O0casiI/3ecX5OVK7Vq9RqAYMJnErtdXHzyfj3DVPUsDAUfBW2nu5n3VKFxTRo4J/BeRKAmikUR3evjVWKt4AAAUVSURBVN/nyjyg2n1cosgqsOgSjqs9qUFAyYqLuxubMXWdAbkVYKNAtyIRnfPLSgVc8gjG/XbTmTMCTvVsdVOh1b6BdYOp6B46DscVXr9apy5WqYhMHc/ShKvYZ0VuMFaTY2NAtYLXxzp1wgooK9C68vdL23+BzBWRQ3H0e0Ouxs6Adq6PHcHpDFRHIDu+1gJge38Fsdftul03DEDw5zNakt4dvXd+/w9+8AN8+OGHJ5/9yU9+gg8++ABffvklPvvsM3zve99zjcjOAMTUkxn39/copWC3250cW60VvXdMab5KBT7pz7yBtKm9lQpIe8AEj+m3x/TjQZVVx6XMhdjfojTa4z4HQkOB6wwsK6OZs0Aq6Umt9n1JW6cyjonkO+02UkEd96iuduj+io7ackk9JYLznp3KlcIDeHXLtP5dpPE7PVKdVhGrYI+ZOKmxr1Q0JOOf9SOPxpcCv851zMpbFJHY4dV39gBItOQ+VQGsVU2u22KvQvc9V7Wj7DtZi5uyMObK4vdAkGlObS+Qlwq4SjfEnOC0mHHSbB3QNoP0CIhG+9mOd0dAd0XsOlwDwA0DXLNzRPBdZeHasPu1Sr5lxP9s8jSmEu8TEBvVxEYmT6MSm5k9qZ/3VxB73a7bdftag/Vt+/u//3v81V/91clrH330ET788EMAKJ9//jmePn2KTz75BL/7u7/LgEsG5o6LxyE1GwIYMuDitDlRQb+rCLKWFM7npdnaVJdaTHCrFuWKy0zIAACDan4SUAQA7WRfidp+OLWjkj5/LnMfzYCSk06bBTkMFM7gA+B9RWH87W3fBwIOHXCfqbIjMYGhT/jJXDH3egdXyZS7NBJwGW3VIDTmZ4apoTDAzhlAFCaEyvStBsekCIDMxCZ7fi9pjZMB2OyZc96TPafK2G3lvOfjVrXEK9fLaVHTTcC67WvOrqoJEcHU1+i4VZ3snEKc7bvjvAct+3sFV52Vi3JNwCugHZRZSx/V0xYmIRnVxM5gNnIpnh2LIwDbEJs7zfWxI6CdFdm5Tc8VxF6363bdrtulYNhw3raB9Khkv3z5sjx+/PiokM7p3oMSffx5Vqcv2BxVFwvBIoJg/WQBnVRy1bvSBfbqs47Tp0oNBtaMy0qUwp+YSKl72I1glRkQKfCbmWtdcu2j6xQBWVXX3QUYPSEZJqKgJwREmYzcLknhVcqYW0+70l7OrW1j6frq2C5pEcNAm8ocYa2nihhnjrFSXbinrBVMdh0rdM1/1M7E6a0aAdQzMMl6y4t5XmUjIACjGVCK6lmzFjbRWIsAYE1A7Ej0VJxmBWTgUNWoMgDpKMMq9bgiN5rKjmH+nAK5AG+Nx8ZYtPZnALYHQBY4TSfe/n9AXBc7/8v6yLYA1DZca2Kv23W7btftf9/WWju6Ytda0VrDfr8/9oF+/fo1ABx//ta3vhUBmxl4FwXaD6D0aP7Ve8dut6OtYka1a1RjW2vjZxlAy4LyTsCSrWQeVPPZiZkBEFeptpW2gDhRbUVAgEQKAicndTYmTr4rKEWYg9ZGgmR1b4A8NdQxnHKAEQNmgK4VnwPH7owtAjZUencK4BOzt7DVmwBnqhVPpLJe2v+W9cieSwBY3/BsnK+0+1E1wdH768J59oXrVAh4hTGXqVrbbgKe6Fiy2lqmIDq1wFUAQwYuI7A4v78G+x5TjRW4Xn2tEkCqQG6m5romUIBORWf1+hGAjephs/+jVOJmgthZnd0HYPjh/wGv4hABkZbXBQAAAABJRU5ErkJggg==';

        materialOption.glowImage = img;
        let m = createDynamicLineAppearance(materialOption);

        return new Cesium[PrimitiveType]({
            geometryInstances:geometryInstances,
            appearance:m,
            asynchronous: asynchronous,
            modelMatrix:modelMatrix,
            classificationType:classificationType||0
        });
    }
}

module.exports = LineGlow;

let LineShader = {};
function createDynamicLineAppearance(options){
    return new Cesium.PolylineMaterialAppearance({
        material:new Cesium.Material({
            translucent:options.translucent||false,
            fabric:{
                uniforms:{
                    //baseColor:options.color||baseColor,
                    odColor:options.odColor||Cesium.Color.YELLOW,
                    rate:options.rate||0.05,
                    t_rate:options.t_rate||120.,
                    glint:options.glint||false,
                    glowImage:options.glowImage,
                },
                source:LineShader[options.type](),
            }
        }),
    });
}


LineShader.TwinkleLineShader =function(){
    return 'czm_material czm_getMaterial(czm_materialInput m){\n'+
        '   czm_material dm = czm_getDefaultMaterial(m);\n'+
        '   vec2 st = m.st;\n'+
        '   vec4 color = odColor;\n' +
        '   float f = fract(czm_frameNumber / t_rate);\n' +
        '   color.a = (0.5 - abs(0.5 - st.t)) / 0.5;\n' +
        '   if(glint){\n' +
        '     color.rgb += color.rgb * sin( f * 3.1415926 * 2.) * rate;\n' +
        '   }\n' +
        '   dm.diffuse = color.rgb;\n'+
        '   dm.alpha = color.a ;\n'+
        '   return dm;\n'+
        "}";
};


LineShader.RunLineShader = function(){
    return  'czm_material czm_getMaterial(czm_materialInput m){\n'+
        '   czm_material dm = czm_getDefaultMaterial(m);\n'+
        '   vec2 st = m.st;\n'+
        '   vec4 color = vec4(odColor.rgb,0.);\n' +
        '   float time = fract(czm_frameNumber / t_rate) ;\n' +
        '   vec4 tColor = texture2D(glowImage, vec2(fract(st.s -time),st.t));\n'+
        '   dm.diffuse = tColor.rgb*color.rgb;\n'+
        '   dm.alpha = tColor.a < 0.5 ? 0.:pow(tColor.a ,10.);\n'+
        '   return dm;\n'+
        "}";
};

LineShader.RunLineShader1 =function(){
    return 'czm_material czm_getMaterial(czm_materialInput m){\n'+
        '   czm_material dm = czm_getDefaultMaterial(m);\n'+
        '   vec2 st = m.st;\n'+
        '   vec4 color = vec4(odColor.rgb,0.);\n' +
        '   float time = fract(czm_frameNumber / t_rate) + rate;\n'+
        '   float time1 = time + rate;\n'+
        '   if(st.s > time && st.s < time1){\n'+
        '     float ff = st.s - time;'+
        '     color.a =  ff / rate ;\n'+
        '     color.a *= ( .5 - abs(0.5 - st.t))/0.5;\n'+
        '   }\n'+
        '   if(time1 > 1.&& st.s < (time1 - 1.)){\n' +
        '     color.a =  (st.s + 1. - time) / rate ;\n'+
        '     color.a *= ( .5 - abs(0.5 - st.t))/0.5;\n'+
        '   }\n'+
        '   dm.diffuse = color.rgb;\n'+
        '   dm.alpha = color.a ;\n'+
        '   return dm;\n'+
        "}";
};










