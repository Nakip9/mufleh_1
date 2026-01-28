import React from 'react';
import { FiAlertCircle, FiRefreshCw, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            error: null,
            errorInfo: null 
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console in development only
        if (import.meta.env.DEV) {
            console.error('Error caught by boundary:', error, errorInfo);
        }
        
        // You can also log the error to an error reporting service here
        // Example: logErrorToService(error, errorInfo);
        
        this.setState({
            error,
            errorInfo
        });
    }

    handleReset = () => {
        this.setState({ 
            hasError: false, 
            error: null, 
            errorInfo: null 
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <div className="error-boundary-content">
                        <div className="error-boundary-icon">
                            <FiAlertCircle />
                        </div>
                        <h1 className="error-boundary-title">عذراً، حدث خطأ</h1>
                        <p className="error-boundary-message">
                            نعتذر عن الإزعاج. يبدو أن شيئاً ما لم يعمل بشكل صحيح.
                        </p>
                        <div className="error-boundary-actions">
                            <button 
                                onClick={this.handleReset}
                                className="btn btn-primary"
                            >
                                <FiRefreshCw />
                                <span>إعادة المحاولة</span>
                            </button>
                            <Link 
                                to="/" 
                                className="btn btn-outline"
                            >
                                <FiHome />
                                <span>العودة للصفحة الرئيسية</span>
                            </Link>
                        </div>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="error-boundary-details">
                                <summary>تفاصيل الخطأ (للمطورين)</summary>
                                <pre className="error-boundary-stack">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>
                    <style>{`
                        .error-boundary {
                            min-height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 2rem;
                            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                        }
                        .error-boundary-content {
                            max-width: 600px;
                            width: 100%;
                            text-align: center;
                            background: white;
                            padding: 3rem;
                            border-radius: 1rem;
                            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                        }
                        .error-boundary-icon {
                            font-size: 4rem;
                            color: #ef4444;
                            margin-bottom: 1.5rem;
                        }
                        .error-boundary-title {
                            font-size: 2rem;
                            font-weight: 700;
                            color: #1f2937;
                            margin: 0 0 1rem 0;
                        }
                        .error-boundary-message {
                            font-size: 1.1rem;
                            color: #6b7280;
                            margin-bottom: 2rem;
                            line-height: 1.6;
                        }
                        .error-boundary-actions {
                            display: flex;
                            gap: 1rem;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        .error-boundary-actions .btn {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.75rem 1.5rem;
                        }
                        .error-boundary-details {
                            margin-top: 2rem;
                            text-align: right;
                            background: #f9fafb;
                            padding: 1rem;
                            border-radius: 0.5rem;
                            border: 1px solid #e5e7eb;
                        }
                        .error-boundary-details summary {
                            cursor: pointer;
                            font-weight: 600;
                            color: #374151;
                            margin-bottom: 0.5rem;
                        }
                        .error-boundary-stack {
                            text-align: left;
                            font-size: 0.875rem;
                            color: #dc2626;
                            background: #fee2e2;
                            padding: 1rem;
                            border-radius: 0.25rem;
                            overflow-x: auto;
                            white-space: pre-wrap;
                            word-break: break-word;
                        }
                        @media (max-width: 640px) {
                            .error-boundary-content {
                                padding: 2rem 1.5rem;
                            }
                            .error-boundary-title {
                                font-size: 1.5rem;
                            }
                            .error-boundary-actions {
                                flex-direction: column;
                            }
                            .error-boundary-actions .btn {
                                width: 100%;
                            }
                        }
                    `}</style>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

