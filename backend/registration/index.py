import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

def handler(event: dict, context) -> dict:
    """Регистрация на форум и отправка билета на email"""
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        data = json.loads(event.get('body', '{}'))
        
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        age = data.get('age')
        tickets_count = data.get('tickets', 1)
        
        if not name or not email or not age:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Заполните все обязательные поля'})
            }
        
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', 587))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        
        if not all([smtp_host, smtp_user, smtp_password]):
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'SMTP не настроен. Обратитесь к администратору.'})
            }
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = 'Билет на форум «Образцовое образование 2026»'
        msg['From'] = smtp_user
        msg['To'] = email
        
        html_body = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {{ font-family: Inter, -apple-system, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 40px 20px; }}
                .header {{ border-bottom: 1px solid #e5e5e5; padding-bottom: 20px; margin-bottom: 30px; }}
                .header h1 {{ font-size: 24px; font-weight: 300; margin: 0; }}
                .ticket {{ border: 1px solid #e5e5e5; padding: 30px; margin: 20px 0; }}
                .ticket-field {{ margin: 15px 0; }}
                .ticket-label {{ font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px; }}
                .ticket-value {{ font-size: 18px; font-weight: 300; margin-top: 5px; }}
                .footer {{ margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 14px; color: #999; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Образцовое образование</h1>
                </div>
                
                <p>Здравствуйте, {name}!</p>
                
                <p>Вы успешно зарегистрированы на всероссийский форум «Образцовое образование 2026».</p>
                
                <div class="ticket">
                    <div class="ticket-field">
                        <div class="ticket-label">Участник</div>
                        <div class="ticket-value">{name}</div>
                    </div>
                    
                    <div class="ticket-field">
                        <div class="ticket-label">Email</div>
                        <div class="ticket-value">{email}</div>
                    </div>
                    
                    <div class="ticket-field">
                        <div class="ticket-label">Количество билетов</div>
                        <div class="ticket-value">{tickets_count}</div>
                    </div>
                    
                    <div class="ticket-field">
                        <div class="ticket-label">Дата</div>
                        <div class="ticket-value">15–16 марта 2026</div>
                    </div>
                    
                    <div class="ticket-field">
                        <div class="ticket-label">Место</div>
                        <div class="ticket-value">МВЦ «Крокус Экспо», Москва</div>
                    </div>
                </div>
                
                <p>Покажите это письмо на входе или распечатайте его.</p>
                
                <p>Ждём вас на форуме!</p>
                
                <div class="footer">
                    © 2026 Образцовое образование<br>
                    Всероссийский форум о будущем обучения
                </div>
            </div>
        </body>
        </html>
        """
        
        msg.attach(MIMEText(html_body, 'html', 'utf-8'))
        
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Билет успешно отправлен на ваш email'
            })
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Неверный формат данных'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }
