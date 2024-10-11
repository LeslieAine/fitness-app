"use client";

export default function NotFound() {
    return (
        <>
            <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="error-404">404</div>
                <br /><br />
                <span className="info-404">Errr I Think You Might Be Lost</span>
            </div>
        </>
    )
}